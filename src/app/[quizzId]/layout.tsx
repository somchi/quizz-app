import ParticlesBackground from './_components/Particles';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ParticlesBackground>{children}</ParticlesBackground>;
}
