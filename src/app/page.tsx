"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { UtensilsCrossed, Leaf, Wheat, BookOpen, MapPin, Phone, Truck } from "lucide-react";

export default function ModusPizzeriaMilano() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="dotGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Modus"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078258214-lydpaqj6.jpg"
          logoAlt="Modus Pizzeria Logo"
          navItems={[
            { name: "Chi Siamo", id: "about" },
            { name: "La Pizza", id: "features" },
            { name: "Dove Siamo", id: "locations" },
            { name: "Contatti", id: "contact" }
          ]}
          button={{
            text: "Prenota Ora",
            href: "tel:+39-02-8286-0006"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="MODUS"
          description="L'evoluzione di un sogno: portare l'autenticità dei sapori cilentani nel cuore di Milano. Ingredienti prelibati e amore per il Cilento."
          buttons={[
            { text: "Scopri di Più", href: "about" },
            { text: "Prenota Ora", href: "tel:+39-02-8286-0006" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078259039-2azv36te.jpg",
              imageAlt: "Artisan pizza preparation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078260382-ufnfxhcl.jpg",
              imageAlt: "Modus pizzeria interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078262241-ehwi34w7.jpg",
              imageAlt: "Wood fired pizza oven"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Chi Siamo"
          description="Modus è l'evoluzione di un sogno nato dall'esperienza e dalla passione di Paolo De Simone. Un artigiano del gusto le cui radici affondano nel Cilento, la terra che ha dato vita alla dieta mediterranea. Unisce tradizione autentica con l'energia innovativa di Milano, portando sapori cilentani genuini nel cuore della città."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="La Nostra Offerta"
          description="Scopri gli elementi distintivi che rendono Modus unica nel panorama culinario milanese"
          tag="Specialità"
          features={[
            { title: "Pizza Autentica", icon: UtensilsCrossed },
            { title: "Ingredienti Cilentani", icon: Leaf },
            { title: "Lievito Naturale", icon: Wheat },
            { title: "Ricette Tradizionali", icon: BookOpen }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          buttons={[]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Cosa Dicono i Nostri Ospiti"
          description="Esperienze autentiche di chi ha gustato l'autentica pizza del Cilento a Milano"
          tag="Testimonianze"
          testimonials={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Imprenditore",
              testimonial: "Finalmente una vera pizza cilentana a Milano! La qualità degli ingredienti e la passione di Paolo sono evidenti in ogni morso.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078263711-tl0elbdf.jpg",
              imageAlt: "Marco Rossi"
            },
            {
              id: "2",
              name: "Giulia Marino",
              role: "Designer",
              testimonial: "L'atmosfera è accogliente e autentica. Mi sento come se fossi al Cilento. Un'esperienza indimenticabile.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078264404-3lg5gzxa.jpg",
              imageAlt: "Giulia Marino"
            },
            {
              id: "3",
              name: "Antonio Di Vincenzo",
              role: "Chef",
              testimonial: "Come professionista, apprezzo l'artigianalità. Ogni pizza è un capolavoro, dal cornicione al condimento.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078265301-w1b3n1z3.jpg",
              imageAlt: "Antonio Di Vincenzo"
            },
            {
              id: "4",
              name: "Sofia Lombardi",
              role: "Giornalista",
              testimonial: "La storia di Modus, raccontata attraverso il cibo, è affascinante. Consiglio a tutti di scoprire questo luogo speciale.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078265881-iycjg2h2.jpg",
              imageAlt: "Sofia Lombardi"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Domande Frequenti"
          sideDescription="Tutto quello che devi sapere su Modus Pizzeria"
          faqs={[
            {
              id: "1",
              title: "Quali sono gli orari di apertura?",
              content: "Lunedì – Domenica: 12:30 – 14:30 / 19:00 – 23:30. Puoi prenotare il tuo tavolo contattandoci direttamente."
            },
            {
              id: "2",
              title: "Offrite servizio di delivery?",
              content: "Sì, offriamo sia delivery che servizio di asporto. Contattaci al +39 02 8286 0006 per le tue ordinazioni."
            },
            {
              id: "3",
              title: "Dove sono localizzate le pizzerie?",
              content: "Abbiamo due sedi a Milano: Via Andrea Maffei, 12 (20135) e Corso Magenta, 25 (20123). Entrambe offrono la stessa autentica esperienza."
            },
            {
              id: "4",
              title: "Gli ingredienti sono biologici?",
              content: "Utilizziamo ingredienti selezionati dal Cilento, provenienti da fornitori locali che condividono la nostra filosofia di qualità e autenticità."
            },
            {
              id: "5",
              title: "Potete preparare pizza senza glutine?",
              content: "Contattaci direttamente per discutere delle esigenze dietetiche specifiche. Cerchiamo sempre di accomodare i nostri ospiti."
            },
            {
              id: "6",
              title: "È possibile prenotare per eventi privati?",
              content: "Sì, siamo disponibili per eventi privati e cene aziendali. Chiama il +39 399 461 608 per informazioni."
            }
          ]}
          textPosition="left"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Rimani Aggiornato"
          description="Iscriviti alla nostra newsletter per ricevere gli ultimi aggiornamenti, news e offerte speciali da Modus Pizzeria."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078266718-6t4oqeoe.jpg"
          imageAlt="Modus pizzeria dining experience"
          mediaPosition="right"
          inputPlaceholder="La tua email"
          buttonText="Iscriviti"
          termsText="Rispettiamo la tua privacy. Potrai annullare l'iscrizione in qualsiasi momento."
        />
      </div>

      <div id="locations" data-section="locations">
        <FeatureCardFive
          title="Dove Siamo"
          description="Visita una delle nostre due locations a Milano per scoprire l'autentica pizza del Cilento"
          tag="Le Nostre Sedi"
          features={[
            { title: "Via Andrea Maffei", icon: MapPin },
            { title: "Corso Magenta", icon: MapPin },
            { title: "Prenotazioni", icon: Phone },
            { title: "Delivery Attivo", icon: Truck }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          buttons={[]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764078258214-lydpaqj6.jpg"
          logoText="Modus"
          logoWidth={100}
          logoHeight={40}
          copyrightText="© 2024 Modus Pizzeria | Storie di Pane Srl | P.IVA 04939840650"
          columns={[
            {
              title: "Scopri",
              items: [
                { label: "Chi Siamo", href: "about" },
                { label: "La Nostra Storia", href: "about" },
                { label: "Filosofia", href: "about" },
                { label: "La Pizza", href: "features" }
              ]
            },
            {
              title: "Contatti",
              items: [
                { label: "Via Andrea Maffei, 12 - Milano", href: "tel:+39-02-8286-0006" },
                { label: "Corso Magenta, 25 - Milano", href: "tel:+39-02-8286-0006" },
                { label: "Prenota: +39 02 8286 0006", href: "tel:+39-02-8286-0006" },
                { label: "Info: +39 399 461 608", href: "tel:+39-399-461-608" }
              ]
            },
            {
              title: "Seguici",
              items: [
                { label: "Scarica Menu", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Stampa", href: "#" },
                { label: "News", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}