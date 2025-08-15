'use client';

import dynamic from 'next/dynamic';

export const FeaturesSectionLazy = dynamic(
  () => import('./FeaturesSection').then((m) => m.FeaturesSection),
  { ssr: false }
);

export const UniversityLogosLazy = dynamic(
  () => import('./UniversityLogos').then((m) => m.UniversityLogos),
  { ssr: false }
);

export const HowItWorksSectionLazy = dynamic(
  () => import('./HowItWorksSection').then((m) => m.HowItWorksSection),
  { ssr: false }
);

export const CTASectionLazy = dynamic(() => import('./CTASection').then((m) => m.CTASection), {
  ssr: false,
});
