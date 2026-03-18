import SectionReveal from "@/components/SectionReveal";
import Layout from "@/components/Layout";
import { useSiteContent } from "@/hooks/useSiteContent";

const defaults = {
  disclaimer_updated: "March 2026",
  disclaimer_medical: "The information provided on this website is for general informational purposes only and does not constitute medical or dental advice. It should not be used as a substitute for professional dental consultation, diagnosis, or treatment.",
  disclaimer_relationship: "Browsing this website or contacting us through our website does not create a doctor-patient relationship. A professional relationship is only established through an in-person consultation at our clinic.",
  disclaimer_outcomes: "Results from dental treatments vary by individual. Images or descriptions of treatments on this website are for illustrative purposes and do not guarantee specific outcomes. Your dentist will discuss realistic expectations during your consultation.",
  disclaimer_links: "This website may contain links to external websites. Rubi Smile Dental Clinic is not responsible for the content or accuracy of external sites.",
  disclaimer_emergency: "If you are experiencing a dental emergency, please call us directly at +234 902 440 3837 or visit our clinic immediately. Do not rely on website information for emergency situations.",
};

const Disclaimer = () => {
  const { content: c } = useSiteContent("legal");
  const g = (key: string) => (c[key] as string) || defaults[key as keyof typeof defaults] || "";

  return (
    <Layout>
      <section className="bg-muted py-24">
        <div className="container mx-auto px-6 text-center">
          <SectionReveal>
            <h1 className="font-display text-5xl font-extrabold text-foreground">Disclaimer</h1>
            <p className="font-body text-muted-foreground mt-4">Last updated: {g("disclaimer_updated")}</p>
          </SectionReveal>
        </div>
      </section>
      <section className="bg-background py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose prose-slate max-w-none font-body text-muted-foreground leading-relaxed space-y-8">
            <SectionReveal>
              <h2 className="font-display text-2xl font-bold text-foreground">Medical Disclaimer</h2>
              <p>{g("disclaimer_medical")}</p>
            </SectionReveal>
            <SectionReveal>
              <h2 className="font-display text-2xl font-bold text-foreground">No Doctor-Patient Relationship</h2>
              <p>{g("disclaimer_relationship")}</p>
            </SectionReveal>
            <SectionReveal>
              <h2 className="font-display text-2xl font-bold text-foreground">Treatment Outcomes</h2>
              <p>{g("disclaimer_outcomes")}</p>
            </SectionReveal>
            <SectionReveal>
              <h2 className="font-display text-2xl font-bold text-foreground">External Links</h2>
              <p>{g("disclaimer_links")}</p>
            </SectionReveal>
            <SectionReveal>
              <h2 className="font-display text-2xl font-bold text-foreground">Emergency Notice</h2>
              <p>{g("disclaimer_emergency")}</p>
            </SectionReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
