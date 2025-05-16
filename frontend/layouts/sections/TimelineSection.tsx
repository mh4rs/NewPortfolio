import Section from "@frontend/components/common/Section";
import Heading from "@frontend/components/Heading";

export default function ContactSection() {
  return (
    <Section id="contact">
      <Heading name="Contact" desc="Let's connect and build something great." />

      <div className="max-w-xl mx-auto text-center mt-3">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Thank you for visiting my portfolio! If you're interested in collaborating, have questions, or just want to say hello, feel free to reach out at{" "}
          <a
            href="mailto:mharissa@umich.edu"
            className="text-blue-600 dark:text-rose-500 font-semibold underline hover:opacity-80"
          >
            mharissa@umich.edu
          </a>
          .
        </p>

      </div>
    </Section>
  );
}
