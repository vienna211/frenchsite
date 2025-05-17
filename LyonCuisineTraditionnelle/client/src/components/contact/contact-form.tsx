import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
  subject: z.string().min(2, { message: "Le sujet doit contenir au moins 2 caractères" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      return await apiRequest("POST", "/api/messages", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 bg-cream rounded-sm shadow-md text-center">
        <div className="mb-4 text-burgundy">
          <i className="fas fa-check-circle text-5xl"></i>
        </div>
        <h3 className="font-serif text-2xl text-burgundy mb-4">Message Envoyé !</h3>
        <p className="mb-6">
          Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
        </p>
        <Button 
          onClick={() => {
            setIsSubmitted(false);
            form.reset();
          }}
          className="bg-burgundy text-white hover:bg-opacity-90"
        >
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-serif text-2xl text-burgundy mb-6">Envoyez-nous un Message</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom complet*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Votre nom"
                      className="border-cream focus:border-burgundy focus:ring-burgundy"
                      {...field}
                    />
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
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="votre@email.com"
                      className="border-cream focus:border-burgundy focus:ring-burgundy"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sujet*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Sujet de votre message"
                    className="border-cream focus:border-burgundy focus:ring-burgundy"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Votre message..."
                    className="min-h-32 border-cream focus:border-burgundy focus:ring-burgundy"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit"
            className="w-full bg-burgundy text-white hover:bg-opacity-90"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <span className="flex items-center">
                <i className="fas fa-spinner fa-spin mr-2"></i> Envoi en cours...
              </span>
            ) : (
              "Envoyer le message"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
