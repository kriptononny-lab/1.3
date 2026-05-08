import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Badges from '@/components/Badges';
import Marquee from '@/components/Marquee';
import Trust from '@/components/Trust';
import Counters from '@/components/Counters';
import Advantages from '@/components/Advantages';
import Services from '@/components/Services';
import MapSection from '@/components/MapSection';
import Pricing from '@/components/Pricing';
import CtaForm from '@/components/CtaForm';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Badges />
        <Marquee />
        <Trust />
        <Counters />
        <Advantages />
        <Services />
        <MapSection />
        <Pricing />
        <CtaForm />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <Modal />
    </>
  );
}
