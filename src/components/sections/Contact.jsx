import React from "react";
import useContent from "../../hooks/useContent";
import Button from "../ui/Button";

const Contact = () => {
  const content = useContent();
  const data = content?.contact || {};

  return (
    <section
      id="contact"
      className="py-32 px-8 text-center animate-fadeInUp"
    >
      <h2 className="text-4xl font-semibold mb-10">Contact</h2>

      <p className="text-white/70 mb-6 max-w-2xl mx-auto text-lg">
        {data.message ||
          "Feel free to reach out for collaborations, AI/ML projects, or consulting work."}
      </p>

      {/* Email Button */}
      <Button
        className="px-8 py-3 mt-4"
        onClick={() => window.open(`mailto:${data.email}`, "_blank")}
      >
        Email Me
      </Button>
    </section>
  );
};

export default Contact;
