import { BrandPage, brandMetadata } from "@/views/brand-page";

export const metadata = brandMetadata("projects");

export default function ProjectsPage() {
  return <BrandPage page="projects" />;
}
