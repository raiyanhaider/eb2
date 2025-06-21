import DashboardLayout from "@/components/layout/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function ChatPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 h-[calc(100vh-8rem)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Chat</h1>
          <p className="text-muted-foreground mt-1">
            Get writing assistance from our AI
          </p>
        </div>
        
        <Card className="flex-1 flex flex-col">
          <CardContent className="flex-1 p-6 flex flex-col">
            <div className="flex-1 space-y-4">
              <div className="bg-muted/50 rounded-lg p-4 max-w-[80%]">
                <p>Hello! I'm your AI writing assistant. How can I help you today?</p>
              </div>
            </div>
            
            <div className="border-t pt-4 mt-auto">
              <form className="flex gap-2">
                <Input 
                  placeholder="Type your message..." 
                  className="flex-1"
                />
                <Button>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}