import { Metadata } from "next";
import Footer from "@frontend/layouts/footer/Footer";
import TimelineSection from "@frontend/layouts/sections/TimelineSection";
import BackToTop from "@frontend/layouts/buttons/BackToTop";

export const metadata: Metadata = {
  title: "Contact",
};

export default function TimelinePage() {
  return (
    <>
      <div className="container relative">
        <BackToTop id="#contact" />
        <TimelineSection />
      </div>
      <Footer />
    </>
  );
}
