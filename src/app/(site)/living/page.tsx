import { BrandPage, brandMetadata } from "@/views/brand-page";

export const metadata = brandMetadata("living");

export default function LivingPage() {
  return <BrandPage page="living" />;
}
