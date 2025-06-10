import { ParticlesBackground } from '../_components/Particles';

export default function AudienceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ParticlesBackground>{children}</ParticlesBackground>;
}
