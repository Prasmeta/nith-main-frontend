'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ArrowRight, Loader2 } from 'lucide-react';

import { buildApiUrl } from '@/app/lib/api-base';

type VisitorPageData = {
  hero_heading_en: string;
  hero_heading_hi: string;
  hero_subheading_en: string;
  hero_subheading_hi: string;
  intro_en: string;
  intro_hi: string;
  cta_label_en: string;
  cta_label_hi: string;
  cta_url: string;
  footer_note_en: string;
  footer_note_hi: string;
};

type VisitorRecord = {
  id: number;
  name_en: string;
  name_hi: string;
  designation_en: string;
  designation_hi: string;
  description_en: string;
  description_hi: string;
  website_label_en: string;
  website_label_hi: string;
  website_url: string;
  image_url: string;
  sort_order: number;
};

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL?.trim()
    ? `${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')}/administration/visitor`
    : buildApiUrl('/administration/visitor');

const FALLBACK_PAGE: VisitorPageData = {
  hero_heading_en: 'Visitor',
  hero_heading_hi: 'आगंतुक',
  hero_subheading_en: 'Official Visitor of the Institute',
  hero_subheading_hi: 'संस्थान के आधिकारिक आगंतुक',
  intro_en:
    'Her Excellency Honourable Smt. Droupadi Murmu, The President of India, is the ex officio visitor of the Institute.',
  intro_hi:
    'माननीय श्रीमती द्रौपदी मुर्मु, भारत की राष्ट्रपति, संस्थान की पदेन आगंतुक हैं।',
  cta_label_en: 'Official Portal',
  cta_label_hi: 'आधिकारिक पोर्टल',
  cta_url: 'https://rashtrapati.gov.in',
  footer_note_en:
    'For formal communications, please use the President\'s official channels.',
  footer_note_hi: 'औपचारिक संचार के लिए, कृपया राष्ट्रपति के आधिकारिक चैनलों का उपयोग करें।',
};

const FALLBACK_VISITORS: VisitorRecord[] = [
  {
    id: 1,
    name_en: 'Smt. Droupadi Murmu',
    name_hi: 'श्रीमती द्रौपदी मुर्मु',
    designation_en: 'President of India',
    designation_hi: 'भारत की राष्ट्रपति',
    description_en:
      'Her Excellency Honourable Smt. Droupadi Murmu, The President of India, is the ex officio visitor of the Institute.',
    description_hi:
      'माननीय श्रीमती द्रौपदी मुर्मु, भारत की राष्ट्रपति, संस्थान की पदेन आगंतुक हैं।',
    website_label_en: 'Official Portal',
    website_label_hi: 'आधिकारिक पोर्टल',
    website_url: 'https://rashtrapati.gov.in',
    image_url: '/presidentimage.jpg',
    sort_order: 1,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const getLocalizedText = (english: string, hindi: string, language: string) =>
  language === 'en' ? english || hindi : hindi || english;

export default function VisitorPage() {
  const language = useSelector((state: RootState) => state.language.value);
  const [pageData, setPageData] = useState<VisitorPageData>(FALLBACK_PAGE);
  const [visitors, setVisitors] = useState<VisitorRecord[]>(FALLBACK_VISITORS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        const [pageResponse, visitorsResponse] = await Promise.all([
          fetch(`${API_BASE}/page`),
          fetch(API_BASE),
        ]);

        if (pageResponse.ok) {
          const pagePayload = await pageResponse.json();
          if (pagePayload?.success && pagePayload.data) {
            setPageData({ ...FALLBACK_PAGE, ...pagePayload.data });
          }
        }

        if (visitorsResponse.ok) {
          const visitorsPayload = await visitorsResponse.json();
          if (visitorsPayload?.success && Array.isArray(visitorsPayload.data)) {
            setVisitors(visitorsPayload.data);
          }
        }
      } catch (error) {
        console.error('Failed to fetch visitor data:', error);
        setPageData(FALLBACK_PAGE);
        setVisitors(FALLBACK_VISITORS);
      } finally {
        setLoading(false);
      }
    };

    void fetchVisitorData();
  }, []);

  const featuredVisitor = visitors[0] || FALLBACK_VISITORS[0];
  const extraVisitors = visitors.slice(1);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <Loader2 className="h-8 w-8 animate-spin text-[#800000]" />
      </div>
    );
  }

  const heroHeading = getLocalizedText(
    pageData.hero_heading_en,
    pageData.hero_heading_hi,
    language
  );
  const heroSubheading = getLocalizedText(
    pageData.hero_subheading_en,
    pageData.hero_subheading_hi,
    language
  );
  const introText = getLocalizedText(
    pageData.intro_en,
    pageData.intro_hi,
    language
  );
  const ctaLabel = getLocalizedText(
    pageData.cta_label_en,
    pageData.cta_label_hi,
    language
  );
  const footerNote = getLocalizedText(
    pageData.footer_note_en,
    pageData.footer_note_hi,
    language
  );

  const visitorName = getLocalizedText(
    featuredVisitor.name_en,
    featuredVisitor.name_hi,
    language
  );
  const visitorDesignation = getLocalizedText(
    featuredVisitor.designation_en,
    featuredVisitor.designation_hi,
    language
  );
  const visitorDescription = getLocalizedText(
    featuredVisitor.description_en,
    featuredVisitor.description_hi,
    language
  );

  const buttonHref = pageData.cta_url || featuredVisitor.website_url;
  const buttonLabel = ctaLabel || featuredVisitor.website_label_en || 'Official Portal';

  return (
    <div className="min-h-screen bg-white">
      <Header31 />

      <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 md:px-12">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-[#800000]"
            >
              {language === 'en' ? 'Home' : 'होम'}
            </Link>
            <span>›</span>
            <span className="text-gray-400">
              {language === 'en' ? 'Administration' : 'प्रशासन'}
            </span>
            <span>›</span>
            <span className="font-medium text-[#800000]">
              {heroHeading}
            </span>
          </nav>
        </div>
      </div>

      <section className="relative overflow-hidden bg-linear-to-br from-[#800000] via-[#631012] to-[#8B1E1E]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-white blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-white blur-3xl animate-pulse delay-700" />
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-5" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 py-24 text-center md:px-12 md:py-32"
        >
          <h1 className="mb-6 text-5xl font-black tracking-tight text-white md:text-7xl">
            {heroHeading}
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-white/80 md:text-xl">
            {heroSubheading}
          </p>
        </motion.div>
      </section>

      <section className="bg-linear-to-b from-gray-50 to-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl md:p-12">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
              <div className="shrink-0">
                <div className="h-96 w-72 overflow-hidden rounded-2xl bg-linear-to-br from-[#800000] to-[#631012] shadow-2xl md:h-136 md:w-96">
                  <img
                    src={featuredVisitor.image_url || '/presidentimage.jpg'}
                    alt={visitorName}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="w-full text-center lg:text-left">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  {visitorName}
                </h2>

                <div className="mb-6 inline-block rounded-full bg-[#800000]/10 px-4 py-2 lg:mb-8">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#800000]">
                    {visitorDesignation}
                  </p>
                </div>

                <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-gray-700 lg:mx-0">
                  {visitorDescription || introText}
                </p>

                <div className="flex flex-col items-center gap-4 lg:items-start">
                  <a
                    href={buttonHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-[#800000] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#631012] hover:shadow-xl"
                  >
                    {buttonLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <p className="max-w-lg text-sm text-gray-500">{footerNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {extraVisitors.length > 0 && (
        <section className="bg-white px-6 pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#800000]" />
              <h3 className="text-xl font-bold text-gray-900">
                {language === 'en' ? 'Additional Visitors' : 'अतिरिक्त आगंतुक'}
              </h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {extraVisitors.map((visitor) => {
                const name = getLocalizedText(visitor.name_en, visitor.name_hi, language);
                const designation = getLocalizedText(
                  visitor.designation_en,
                  visitor.designation_hi,
                  language
                );
                const description = getLocalizedText(
                  visitor.description_en,
                  visitor.description_hi,
                  language
                );
                const label = getLocalizedText(
                  visitor.website_label_en,
                  visitor.website_label_hi,
                  language
                );

                return (
                  <article
                    key={visitor.id}
                    className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg"
                  >
                    <div className="h-64 bg-linear-to-br from-[#800000] to-[#631012]">
                      <img
                        src={visitor.image_url || '/presidentimage.jpg'}
                        alt={name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-3 p-6 text-center">
                      <h4 className="text-xl font-bold text-gray-900">{name}</h4>
                      <p className="text-sm font-semibold uppercase tracking-wide text-[#800000]">
                        {designation}
                      </p>
                      <p className="text-sm leading-6 text-gray-700">
                        {description}
                      </p>
                      {visitor.website_url && (
                        <a
                          href={visitor.website_url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#800000] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#631012]"
                        >
                          {label || ctaLabel}
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
