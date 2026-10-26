import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { copy } from "@/data/copy";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a className="skip-link" href="#contenuto">
        {copy.skipToContent}
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
