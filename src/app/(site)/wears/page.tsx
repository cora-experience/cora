import { BrandPage, brandMetadata } from "@/views/brand-page";

export const metadata = brandMetadata("wears");

export default function WearsPage() {
  return <BrandPage page="wears" />;
}
