import { BookOpen, Sparkles, ArrowRight, Zap, WalletCards as FlowParallel, Brush, Type, ListTree, Edit3, Target } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<any>> = {
  Zap,
  BookOpen,
  FlowParallel,
  Brush,
  Type,
  ListTree,
  Edit3,
  Target
};

export default function FeaturesPage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Useful Tools</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Powerful AI-powered features to enhance your writing journey
            </p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
            <Sparkles className="mr-2 h-4 w-4" />
            Try All Features
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURES.map((feature) => (
            <Card 
              key={feature.id} 
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className={`h-1.5 w-full ${feature.color} opacity-75 group-hover:opacity-100 transition-opacity`} />
              <CardHeader className="pt-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${feature.color.replace('bg-', 'bg-opacity-10 ')} transition-colors group-hover:bg-opacity-20`}>
                    {iconMap[feature.icon] && React.createElement(iconMap[feature.icon], {
                      className: `h-6 w-6 ${feature.color.replace('bg-', 'text-')}`
                    })}
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{feature.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    {feature.steps.map((step, index) => (
                      <div key={step} className="flex items-center text-sm text-muted-foreground">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border mr-2 text-xs">
                          {index + 1}
                        </div>
                        {step.charAt(0).toUpperCase() + step.slice(1)}
                      </div>
                    ))}
                  </div>
                  <Link href={`/${feature.id}/steps/${feature.steps[0]}`}>
                    <Button 
                      className="w-full group/btn bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90 hover:opacity-100"
                    >
                      Try {feature.name}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}