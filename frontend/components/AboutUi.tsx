import AboutUi from "@frontend/components/AboutUi";

export default function AboutSection() {
  // Hardcode your about data
  const aboutData = [
    {
      displayName: "Meriam",
      desc: "I'm a senior undergrad at UM-Dearborn...",
      fullName: "Meriam Harissa",
      nickname: "Meriam",
      // ...
    },
  ];

  return (
    <section id="about">
      {aboutData.map((about) => (
        <AboutUi key={about.fullName} {...about} />
      ))}
    </section>
  );
}
