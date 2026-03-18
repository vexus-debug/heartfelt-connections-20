import SectionReveal from "@/components/SectionReveal";
import Layout from "@/components/Layout";
import { useSiteContent } from "@/hooks/useSiteContent";

const defaults = {
  terms_updated: "March 2026",
  terms_services: "Rubi Smile Dental Clinic provides dental healthcare services including preventive, restorative, cosmetic, surgical, orthodontic, and pediatric dentistry. All treatments are provided by qualified dental professionals.",
  terms_appointments: "Appointments can be booked via phone, WhatsApp, or in person. We request at least 24 hours notice for cancellations. Repeated no-shows may affect future scheduling priority.",
  terms_payment: "Payment is due at the time of service unless covered by NHIS. We accept cash, bank transfers, and applicable insurance. Treatment plans with associated costs will be discussed before procedures begin.",
  terms_nhis: "NHIS coverage is subject to the terms of your insurance plan. Some treatments may not be covered and will require out-of-pocket payment. We will inform you of any costs not covered before proceeding.",
  terms_responsibilities: "Patients are responsible for providing accurate medical history, following post-treatment instructions, and attending scheduled follow-up appointments.",
  terms_liability: "While we strive for the best outcomes, dental procedures carry inherent risks. Rubi Smile Dental Clinic will not be liable for complications arising from patient non-compliance with treatment instructions.",
};

const Terms = () => {
  const { content: c } = useSiteContent("legal");
  const g = (key: string) => (c[key] as string) || defaults[key as keyof typeof defaults] || "";

  return (
    <Layout>
      <section className="bg-muted py-24">
        <div className="container mx-auto px-6 text-center">
          <SectionReveal>
            <h1 className="font-display text-5xl font-extrabold text-foreground">Terms & Conditions</h1>
            <p className="font-body text-muted-foreground mt-4">Last updated: {g("terms_updated")}</p>
          </SectionReveal>
        </div>
      </section>
      <section className="bg-background py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose prose-slate max-w-none font-body text-muted-foreground leading-relaxed space-y-8">
            <SectionReveal>
              <h2 className="font-display text-2xl font-bold text-foreground">1. Services</h2>
              <p>{g("terms_services")}</p>
            </SectionReveal>
            <SectionReveal>
              <h2 className="font-display text-2xl font-bold text-foreground">2. Appointments</h2>
              <p>{g("terms_appointments")}</p>
            </SectionReveal>
            <SectionReveal>
              <h2 className="font-display text-2xl font-bold text-foreground">3. Payment</h2>
              <p>{g("terms_payment")}</p>
            </SectionReveal>
            <SectionReveal>
              <h2 className="font-display text-2xl font-bold text-foreground">4. NHIS Patients</h2>
              <p>{g("terms_nhis")}</p>
            </SectionReveal>
            <SectionReveal>
              <h2 className="font-display text-2xl font-bold text-foreground">5. Patient Responsibilities</h2>
              <p>{g("terms_responsibilities")}</p>
            </SectionReveal>
            <SectionReveal>
              <h2 className="font-display text-2xl font-bold text-foreground">6. Limitation of Liability</h2>
              <p>{g("terms_liability")}</p>
            </SectionReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
