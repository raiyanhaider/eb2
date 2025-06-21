import DashboardLayout from "@/components/layout/dashboard-layout";
import { FEATURES } from "@/lib/constants";

export async function generateStaticParams() {
  return FEATURES.map((feature) => ({
    id: feature.id,
  }));
}

export default function FeatureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        {children}
      </div>
    </DashboardLayout>
  );
}