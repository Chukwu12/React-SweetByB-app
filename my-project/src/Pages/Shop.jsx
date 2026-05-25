// src/Pages/Shop.jsx
import { useEffect, useState, Suspense, lazy } from "react";

import Hero from "../components/Hero/Hero";
import Menus from "../components/Menus/Menus";
import Banner from "../components/Banner/Banner";
import ScrollToTopButton from "../components/ScrollToTopButton";


const HolidayMenus = lazy(() =>
  import("../components/HolidayMenus/HolidayMenus")
);

const ExploreMenu = lazy(() =>
  import("../components/ProductGallery/ExploreMenu")
);

const FoodDisplay = lazy(() =>
  import("../components/FoodDisplay/FoodDisplay")
);

const SectionFallback = ({ label, minHeight = "min-h-[420px]" }) => (
  <div className={`${minHeight} flex items-center justify-center px-4`}>
    <div className="w-full max-w-5xl rounded-3xl border border-[#efdacf] bg-white/65 backdrop-blur-sm p-6 md:p-8 shadow-[0_16px_36px_-28px_rgba(59,42,40,0.6)]">
      <div className="h-5 w-36 rounded-md bg-[#f4e5dc] animate-pulse" />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="h-32 rounded-2xl bg-[#f8ede6] animate-pulse" />
        <div className="h-32 rounded-2xl bg-[#f8ede6] animate-pulse" />
        <div className="h-32 rounded-2xl bg-[#f8ede6] animate-pulse" />
      </div>
      <p className="mt-4 font-manrope text-sm text-[#8d6f66]">Loading {label}...</p>
    </div>
  </div>
);

const Shop = () => {
  const [category, setCategory] = useState("All");
  const [activeSection, setActiveSection] = useState("hero");

  const sectionNavItems = [
    { id: "hero", label: "Hero" },
    { id: "menus", label: "Menus" },
    { id: "banner", label: "Featured" },
    { id: "holiday-menus", label: "Holiday" },
    { id: "product-menu", label: "Categories" },
    { id: "dessert-collection", label: "Collection" },
  ];

  useEffect(() => {
    const sectionElements = sectionNavItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#FFF8F3] pb-24 lg:pb-0">
      <aside className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-white/75 backdrop-blur-md border border-[#efdacf] rounded-full px-3 py-4 shadow-[0_18px_45px_-24px_rgba(59,42,40,0.55)]">
          <div className="flex flex-col gap-2 items-center">
            {sectionNavItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="group relative"
                  aria-label={`Jump to ${item.label}`}
                  title={item.label}
                >
                  <span
                    className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#D97757] scale-125 shadow-[0_0_0_4px_rgba(217,119,87,0.2)]"
                        : "bg-[#d9c3b6] hover:bg-[#caa897]"
                    }`}
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#3B2A28] text-white text-xs px-2 py-1 opacity-0 translate-x-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <aside className="lg:hidden fixed bottom-4 inset-x-4 z-40">
        <div className="bg-white/80 backdrop-blur-md border border-[#efdacf] rounded-full px-2 py-2 shadow-[0_18px_40px_-20px_rgba(59,42,40,0.5)]">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap no-scrollbar px-1">
            {sectionNavItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={`mobile-${item.id}`}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`font-manrope text-xs px-3 py-1.5 rounded-full transition-all duration-300 border ${
                    isActive
                      ? "bg-[#D97757] text-white border-[#D97757] shadow-[0_8px_18px_-10px_rgba(217,119,87,0.95)]"
                      : "bg-white/70 text-[#6d5751] border-[#ead5ca] hover:bg-white"
                  }`}
                  aria-label={`Jump to ${item.label}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <section id="hero">
        <Hero />
      </section>

      <section className="bg-[#FFF8F3]">
        <Menus />
      </section>

      <section id="banner" className="bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[130%] h-16 bg-[#FFF8F3] rounded-b-[100%]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130%] h-16 bg-[#FFF3EC] rounded-t-[100%]" />
        <div className="relative z-10">
          <Banner />
        </div>
      </section>

      <section id="holiday-menus" className="bg-[#FFF3EC] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[130%] h-16 bg-white rounded-b-[100%]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130%] h-16 bg-[#FFF8F3] rounded-t-[100%]" />
        <div className="relative z-10">
          <Suspense fallback={<SectionFallback label="holiday menu" minHeight="min-h-[620px]" />}>
            <HolidayMenus />
          </Suspense>
        </div>
      </section>

      <Suspense fallback={<SectionFallback label="categories" minHeight="min-h-[500px]" />}>
        <section id="product-menu" className="bg-[#FFF8F3]">
          <ExploreMenu category={category} setCategory={setCategory} />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback label="dessert collection" minHeight="min-h-[760px]" />}>
        <section id="dessert-collection" className="bg-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[130%] h-14 bg-[#FFF8F3] rounded-b-[100%]" />
          <FoodDisplay category={category} />
        </section>
      </Suspense>

      <ScrollToTopButton />
    </div>
  );
};

export default Shop;
