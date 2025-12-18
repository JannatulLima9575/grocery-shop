import ContactCTA from "./components/ContactCTA";
import ContactForm from "./components/ContactForm";
import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";

export default function ContactPage() {
  return (
    <div className="space-y-20 py-16">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactCTA />
    </div>
  );
}
