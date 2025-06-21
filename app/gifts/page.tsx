'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Clock, Crown, Users, Zap, Sparkles } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

export default function GiftsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Gifts and Offers</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Exclusive deals and special offers to enhance your content creation journey
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card className="relative">
            <div className="absolute -top-3 left-4 px-2 py-1 bg-rose-100 text-rose-700 text-xs font-medium rounded">
              Limited Time
            </div>
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-muted rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold">Early Bird Special</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Get 30% off on all premium features when you subscribe in the next 24 hours. Early adopters get lifetime access to upcoming features.
              </p>
              <Button className="w-full bg-gradient-to-r from-rose-600 to-pink-600">
                Claim Offer
                <span className="ml-2">→</span>
              </Button>
            </CardContent>
          </Card>

          <Card className="relative">
            <div className="absolute -top-3 left-4 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
              Most Popular
            </div>
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-muted rounded-lg">
                  <Crown className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold">Premium Bundle</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Access all premium tools and features with unlimited usage. Includes priority support and custom AI model training.
              </p>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
                Claim Offer
                <span className="ml-2">→</span>
              </Button>
            </CardContent>
          </Card>

          <Card className="relative">
            <div className="absolute -top-3 left-4 px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded">
              Teams
            </div>
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-muted rounded-lg">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold">Team Collaboration</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Special pricing for teams of 5 or more. Includes team workspace, shared templates, and analytics dashboard.
              </p>
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600">
                Claim Offer
                <span className="ml-2">→</span>
              </Button>
            </CardContent>
          </Card>

          <Card className="relative">
            <div className="absolute -top-3 left-4 px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">
              Featured
            </div>
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-muted rounded-lg">
                  <Zap className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold">Content Creator Pro</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Tailored package for content creators with advanced AI writing tools, SEO features, and content planning tools.
              </p>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                Claim Offer
                <span className="ml-2">→</span>
              </Button>
            </CardContent>
          </Card>

          <Card className="relative">
            <div className="absolute -top-3 left-4 px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded">
              Students
            </div>
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-muted rounded-lg">
                  <Gift className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold">Student Discount</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                50% off for students with valid .edu email addresses. Perfect for academic writing and research assistance.
              </p>
              <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600">
                Claim Offer
                <span className="ml-2">→</span>
              </Button>
            </CardContent>
          </Card>

          <Card className="relative">
            <div className="absolute -top-3 left-4 px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded">
              Enterprise
            </div>
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-muted rounded-lg">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold">Enterprise Solutions</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Custom AI solutions for enterprises. Includes API access, custom training, and dedicated support team.
              </p>
              <Button className="w-full bg-gradient-to-r from-slate-600 to-zinc-600">
                Claim Offer
                <span className="ml-2">→</span>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
          <CardContent className="pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Mega Bundle Deal</h2>
                </div>
                <div className="space-y-2">
                  <p className="text-lg">
                    Get lifetime access to all premium features, tools, and future updates at an unbeatable price. Limited time offer!
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-lg">✓</span>
                      <span>All Premium Features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">✓</span>
                      <span>Lifetime Updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">✓</span>
                      <span>Priority Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">✓</span>
                      <span>Custom AI Training</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">✓</span>
                      <span>API Access</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-sm text-muted-foreground">Regular Price</div>
                <div className="text-2xl line-through text-muted-foreground">$999</div>
                <div className="text-5xl font-bold text-primary">$499</div>
                <div className="text-sm text-muted-foreground mb-4">One-time payment</div>
                <Button className="w-full md:w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  Claim This Deal
                  <span className="ml-2">→</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}