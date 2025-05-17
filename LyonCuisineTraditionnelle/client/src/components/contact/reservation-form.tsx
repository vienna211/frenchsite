import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { TIME_SLOTS, GUEST_OPTIONS } from "@/lib/constants";

const today = new Date().toISOString().split('T')[0];

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
  phone: z.string().min(10, { message: "Veuillez entrer un numéro de téléphone valide" }),
  date: z.string().min(1, { message: "Veuillez sélectionner une date" }),
  time: z.string().min(1, { message: "Veuillez sélectionner une heure" }),
  guests: z.string().min(1, { message: "Veuillez indiquer le nombre de personnes" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ReservationForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      return await apiRequest("POST", "/api/reservations", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Réservation envoyée !",
        description: "Nous vous contacterons pour confirmer votre réservation.",
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
      <div className="text-center">
        <div className="mb-4 text-burgundy">
          <i className="fas fa-check-circle text-5xl"></i>
        </div>
        <h3 className="font-serif text-2xl text-burgundy mb-4">Réservation Envoyée !</h3>
        <p className="mb-6">
          Merci pour votre demande de réservation. Nous vous contacterons dans les plus brefs délais pour confirmer votre table.
        </p>
        <Button 
          onClick={() => {
            setIsSubmitted(false);
            form.reset();
          }}
          className="bg-burgundy text-white hover:bg-opacity-90"
        >
          Faire une autre réservation
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom complet*</FormLabel>
              <FormControl>
                <Input
                  placeholder="Votre nom"
                  className="border-gray-300 focus:border-burgundy focus:ring-burgundy"
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
                  className="border-gray-300 focus:border-burgundy focus:ring-burgundy"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Téléphone*</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="+33 X XX XX XX XX"
                  className="border-gray-300 focus:border-burgundy focus:ring-burgundy"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date*</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    min={today}
                    className="border-gray-300 focus:border-burgundy focus:ring-burgundy"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Heure*</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border-gray-300 focus:ring-burgundy">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {TIME_SLOTS.map((time) => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="guests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de personnes*</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="border-gray-300 focus:ring-burgundy">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {GUEST_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Demande spéciale</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Allergies, occasion spéciale, etc."
                  className="border-gray-300 focus:border-burgundy focus:ring-burgundy"
                  rows={3}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit"
          className="w-full bg-burgundy text-white py-3 hover:bg-opacity-90"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? (
            <span className="flex items-center">
              <i className="fas fa-spinner fa-spin mr-2"></i> Envoi en cours...
            </span>
          ) : (
            "Réserver Maintenant"
          )}
        </Button>
      </form>
    </Form>
  );
}
