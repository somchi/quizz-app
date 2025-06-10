import ParticlesBackground from "../components/Particles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ParticlesBackground>{children}</ParticlesBackground>;
}
