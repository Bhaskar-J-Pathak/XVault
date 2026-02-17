-- =============================================
-- XVault Supabase Database Schema
-- Run this in the Supabase SQL Editor
-- =============================================

-- 1. User Profiles (extends Supabase auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  subscription_mode text check (subscription_mode in ('byo', 'flat')) default null,
  subscription_status text check (subscription_status in ('active', 'canceled', 'past_due', 'none')) default 'none',
  dodo_customer_id text default null,
  x_connected boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS
alter table public.profiles enable row level security;

-- Users can read/update only their own profile
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- 2. Encrypted X Tokens
create table public.x_tokens (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null unique,
  x_user_id text not null,
  x_username text not null,
  encrypted_access_token text not null,
  encrypted_refresh_token text not null,
  token_expires_at timestamptz not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS — tokens are server-only (service role), no client access
alter table public.x_tokens enable row level security;

-- No client policies: tokens are only accessed via service role key
-- from server-side route handlers. This keeps tokens fully server-side.


-- 3. API Usage Tracking (for BYO cost estimation)
create table public.api_usage (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  endpoint text not null,
  method text not null default 'GET',
  estimated_cost numeric(10, 6) not null default 0,
  created_at timestamptz default now()
);

alter table public.api_usage enable row level security;

-- Users can view their own usage
create policy "Users can view own usage"
  on public.api_usage for select
  using (auth.uid() = user_id);

-- Only server (service role) can insert usage records
-- No insert policy for authenticated users — inserts happen server-side.


-- 4. Updated-at trigger helper
create or replace function public.update_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.update_updated_at();

create trigger x_tokens_updated_at
  before update on public.x_tokens
  for each row execute procedure public.update_updated_at();


-- 5. Waitlist Signups
create table public.waitlist_signups (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  created_at timestamptz default now()
);

alter table public.waitlist_signups enable row level security;
-- No client read/write policies — inserts happen via service role from server actions
