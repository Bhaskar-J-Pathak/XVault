'use client';

import dynamic from 'next/dynamic';

const LaserFlow = dynamic(() => import('./Laserflow'), { ssr: false });

export function LaserFlowHero() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    >
      <LaserFlow
        color="#ffffff"
        horizontalBeamOffset={0.2}
        verticalBeamOffset={-0.38}
        verticalSizing={3.5}
        horizontalSizing={0.5}
        fogIntensity={0.52}
        fogScale={0.26}
        wispDensity={1.0}
        wispIntensity={5.0}
        wispSpeed={14.0}
        flowSpeed={0.3}
        flowStrength={0.22}
        decay={1.1}
        falloffStart={1.2}
        fogFallSpeed={0.55}
        mouseTiltStrength={0.012}
      />
    </div>
  );
}
