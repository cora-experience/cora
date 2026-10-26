import { StaysNav } from "@/components/stays-nav";

export default function StaysLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StaysNav />
      {children}
    </>
  );
}
