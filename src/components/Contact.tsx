import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal, useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "030 43202410",
    href: "tel:03043202410",
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: "info@crystal-fs.de",
    href: "mailto:info@crystal-fs.de",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "Hardenbergstr. 12, 10623 Berlin",
    href: null,
  },
  {
    icon: Clock,
    title: "Servicezeiten",
    content: "Mo-Fr: 08:00 - 18:00 Uhr",
    href: null,
  },
];

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name muss mindestens 2 Zeichen haben" })
    .max(100, { message: "Name darf maximal 100 Zeichen haben" }),
  company: z
    .string()
    .trim()
    .max(100, { message: "Firmenname darf maximal 100 Zeichen haben" })
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein" })
    .max(255, { message: "E-Mail darf maximal 255 Zeichen haben" }),
  phone: z
    .string()
    .trim()
    .regex(/^(\+?\d{1,4}[\s-]?)?(\(?\d{1,5}\)?[\s-]?)?[\d\s-]{5,15}$/, {
      message: "Bitte geben Sie eine gültige Telefonnummer ein",
    })
    .or(z.literal(""))
    .optional(),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Betreff muss mindestens 3 Zeichen haben" })
    .max(200, { message: "Betreff darf maximal 200 Zeichen haben" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Nachricht muss mindestens 10 Zeichen haben" })
    .max(2000, { message: "Nachricht darf maximal 2000 Zeichen haben" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const { ref: cardsRef, isVisible: cardsVisible, getDelay } = useStaggeredAnimation(contactInfo.length, 100);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Anfrage gesendet!",
        description: "Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-gradient-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <ScrollReveal direction="right">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Jetzt unverbindliches{" "}
              <span className="text-gradient-primary">Angebot</span> anfordern
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Kontaktieren Sie uns für eine kostenlose Beratung und ein
              individuelles Angebot, das auf Ihre Bedürfnisse zugeschnitten ist.
            </p>

            {/* Contact Cards */}
            <div ref={cardsRef} className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-5 p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${
                    cardsVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${getDelay(index)}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">
                      {item.title}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <span className="block font-semibold text-foreground">
                        {item.content}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="left" delay={200}>
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border/50">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
                Schreiben Sie uns
              </h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ihr Name"
                              className="bg-secondary/50 border-border/50 h-12 rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unternehmen</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Firma"
                              className="bg-secondary/50 border-border/50 h-12 rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-Mail *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="ihre@email.de"
                              className="bg-secondary/50 border-border/50 h-12 rounded-xl"
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
                          <FormLabel>Telefon</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+49 30 12345678"
                              className="bg-secondary/50 border-border/50 h-12 rounded-xl"
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
                        <FormLabel>Betreff *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Worum geht es?"
                            className="bg-secondary/50 border-border/50 h-12 rounded-xl"
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
                        <FormLabel>Nachricht *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Beschreiben Sie Ihre Anforderungen..."
                            rows={4}
                            className="bg-secondary/50 border-border/50 resize-none rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    size="xl"
                    className="w-full group bg-gradient-hero hover:opacity-90 border-0"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Wird gesendet..."
                    ) : (
                      <>
                        Nachricht senden
                        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <a href="/datenschutz" className="underline hover:text-primary">
                      Datenschutzerklärung
                    </a>{" "}
                    zu.
                  </p>
                </form>
              </Form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;