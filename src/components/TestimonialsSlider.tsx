import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: "Michael Schmidt",
    role: "Geschäftsführer, TechStart GmbH",
    content: "Crystal Facility Services überzeugt durch Zuverlässigkeit und Qualität. Unser Büro ist immer makellos sauber, und das Team ist äußerst professionell. Absolute Empfehlung!",
    initial: "M"
  },
  {
    name: "Sarah Müller",
    role: "Office Managerin, Design Studio Berlin",
    content: "Seit wir mit Crystal zusammenarbeiten, müssen wir uns um nichts mehr kümmern. Die Reinigung erfolgt diskret und gründlich. Sehr zufrieden mit dem Service!",
    initial: "S"
  },
  {
    name: "Thomas Weber",
    role: "Partner, Rechtsanwaltskanzlei Weber & Partner",
    content: "Professionell, pünktlich und zuverlässig. Die Qualität der Reinigung ist hervorragend, und die Kommunikation läuft reibungslos. Können wir nur weiterempfehlen.",
    initial: "T"
  },
  {
    name: "Anna Hoffmann",
    role: "Praxismanagerin, Medizinisches Zentrum Mitte",
    content: "In einer Arztpraxis sind Sauberkeit und Hygiene das A und O. Crystal Facility Services erfüllt alle unsere hohen Anforderungen zuverlässig und gewissenhaft.",
    initial: "A"
  },
  {
    name: "Markus Klein",
    role: "Geschäftsführer, Immobilienverwaltung Klein",
    content: "Wir betreuen mehrere Objekte in Berlin und sind mit der Gebäudereinigung von Crystal sehr zufrieden. Faire Preise, gute Qualität und immer erreichbar.",
    initial: "M"
  },
  {
    name: "Julia Becker",
    role: "CEO, Marketing Agentur Kreativ",
    content: "Flexibel, freundlich und gründlich - genau das, was wir gesucht haben. Die Reinigung passt sich perfekt an unsere Bürozeiten an. Top Service!",
    initial: "J"
  }
];

export const TestimonialsSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Was unsere Kunden sagen Test
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vertrauen Sie auf die Erfahrungen zufriedener Kunden aus Berlin und Umgebung
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                    <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold text-lg">
                          {testimonial.initial}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
