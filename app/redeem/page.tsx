'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

export default function RedeemPage() {
  const [codes, setCodes] = useState(['', '', '', '', '', '']);
  const [redeemedCodes, setRedeemedCodes] = useState<string[]>([]);

  const handleCodeChange = (index: number, value: string) => {
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);
  };

  const handleRedeem = () => {
    // Filter out empty codes
    const validCodes = codes.filter(code => code.trim() !== '');
    if (validCodes.length > 0) {
      setRedeemedCodes(prev => [...prev, ...validCodes]);
      setCodes(['', '', '', '', '', '']); // Reset input fields
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-rose-500/10">
            <Gift className="h-6 w-6 text-rose-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Redeem Codes</h1>
            <p className="text-lg text-muted-foreground">
              Enter your promotional codes to unlock rewards
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {codes.map((code, index) => (
                <div key={index} className="space-y-2">
                  <label className="text-sm font-medium">
                    Code {index + 1}
                  </label>
                  <Input
                    value={code}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    placeholder={`CODE ${index + 1}`}
                    className="uppercase"
                  />
                </div>
              ))}
            </div>

            <Button
              onClick={handleRedeem}
              disabled={!codes.some(code => code.trim() !== '')}
              className="w-full bg-gradient-to-r from-rose-600 to-pink-600"
            >
              Redeem Codes
            </Button>

            <div className="mt-8 space-y-4">
              <h2 className="text-lg font-semibold">Redeemed Codes</h2>
              {redeemedCodes.length > 0 ? (
                <div className="space-y-2">
                  {redeemedCodes.map((code, index) => (
                    <div
                      key={index}
                      className="p-3 bg-muted rounded-lg text-sm flex items-center justify-between"
                    >
                      <span>{code}</span>
                      <span className="text-green-500 font-medium">Redeemed</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">
                  No redeemed codes found
                </p>
              )}
            </div>

            <div className="mt-8 space-y-4">
              <h2 className="text-lg font-semibold">How to redeem:</h2>
              <ol className="space-y-2 text-muted-foreground">
                <li>1. Enter your promotional codes in the fields above</li>
                <li>2. Each code can unlock different rewards</li>
                <li>3. You can enter multiple codes at once</li>
                <li>4. Codes are case-insensitive</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}