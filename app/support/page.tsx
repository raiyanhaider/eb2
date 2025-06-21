"use client";

import DashboardLayout from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquare, Mail, Phone, FileText, Send, Plus, Clock, XCircle, BookOpen } from "lucide-react";
import { useState } from "react";

interface Ticket {
  id: string;
  subject: string;
  status: 'open' | 'closed';
  createdAt: string;
  lastUpdated: string;
  messages: {
    id: string;
    sender: 'user' | 'support';
    content: string;
    timestamp: string;
  }[];
}

export default function SupportPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showNewTicket, setShowNewTicket] = useState(false);

  const createTicket = (e: React.FormEvent) => {
    e.preventDefault();
    const newTicket: Ticket = {
      id: `TICKET-${Math.random().toString(36).substr(2, 9)}`,
      subject,
      status: 'open',
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      messages: [
        {
          id: `msg-${Math.random().toString(36).substr(2, 9)}`,
          sender: 'user',
          content: message,
          timestamp: new Date().toISOString()
        }
      ]
    };
    setTickets(prev => [newTicket, ...prev]);
    setSubject('');
    setMessage('');
    setShowNewTicket(false);
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTicket || !newMessage.trim()) return;
    
    setTickets(prev => prev.map(ticket => {
      if (ticket.id === selectedTicket.id) {
        return {
          ...ticket,
          lastUpdated: new Date().toISOString(),
          messages: [
            ...ticket.messages,
            {
              id: `msg-${Math.random().toString(36).substr(2, 9)}`,
              sender: 'user',
              content: newMessage.trim(),
              timestamp: new Date().toISOString()
            }
          ]
        };
      }
      return ticket;
    }));
    setNewMessage('');
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Support</h1>
          <p className="text-muted-foreground mt-1">
            Get help with Goriber Lekhok
          </p>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="lg:row-span-2">
            <CardHeader>
              <CardTitle>Create Support Ticket</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={createTicket} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What can we help you with?"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your issue..."
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Create Ticket</Button>
              </form>
            </CardContent>
          </Card>
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Tickets</h2>
            <div className="space-y-4">
              {tickets.map(ticket => (
                <Card 
                  key={ticket.id}
                  className={`cursor-pointer transition-colors ${
                    selectedTicket?.id === ticket.id ? 'border-primary' : 'hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedTicket(ticket)}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-medium">{ticket.subject}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>
                            {new Date(ticket.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        ticket.status === 'open' 
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {ticket.status}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {selectedTicket && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{selectedTicket.subject}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedTicket(null)}
                  >
                    <XCircle className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4">
                    {selectedTicket.messages.map(msg => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] rounded-lg p-3 ${
                          msg.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}>
                          <p className="text-sm">{msg.content}</p>
                          <span className="text-xs opacity-70 mt-1 block">
                            {new Date(msg.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <form onSubmit={sendMessage} className="flex gap-2">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1"
                    />
                    <Button type="submit" disabled={!newMessage.trim()}>
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Send message</span>
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}