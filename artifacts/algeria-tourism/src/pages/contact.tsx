import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useCreateInquiry } from "@workspace/api-client-react";

// Mirroring the OpenAPI schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  destination: z.string().optional(),
  travelDate: z.string().optional(),
  groupSize: z.coerce.number().min(1).optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const mutation = useCreateInquiry();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      destination: "",
      travelDate: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(
      { data },
      {
        onSuccess: () => {
          toast({
            title: "Inquiry Sent Successfully",
            description: "We will get back to you within 24 hours.",
          });
          form.reset();
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Failed to send inquiry. Please try again.",
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Start Your Journey" 
          subtitle="Contact Us"
          align="center"
        />

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border mt-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-muted/50 h-12 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Email Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" type="email" className="bg-muted/50 h-12 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 234 567 890" className="bg-muted/50 h-12 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Primary Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-muted/50 h-12 rounded-xl">
                            <SelectValue placeholder="Select a region" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="sahara">The Sahara Desert</SelectItem>
                          <SelectItem value="coast">Mediterranean Coast</SelectItem>
                          <SelectItem value="history">Historical Ruins</SelectItem>
                          <SelectItem value="general">General Overview Tour</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="travelDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Estimated Travel Date</FormLabel>
                      <FormControl>
                        <Input type="month" className="bg-muted/50 h-12 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="groupSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Group Size</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" placeholder="2" className="bg-muted/50 h-12 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Your Message *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your dream trip..." 
                        className="bg-muted/50 rounded-xl min-h-[150px] resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/20"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Sending..." : "Send Inquiry"}
                {!mutation.isPending && <Send className="w-5 h-5 ml-2" />}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
