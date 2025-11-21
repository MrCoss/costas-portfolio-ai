import React from "react";
import useContent from "../../hooks/useContent";
import GlassCard from "../ui/GlassCard";

const Education = () => {
  const content = useContent();
  const edu = content?.education || []; // array of { school, degree, year }

  return (
    <section
      id="education"
      className="py-32 px-8 animate-fadeInUp"
    >
      <h2 className="text-center text-4xl font-semibold mb-14">
        Education
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {edu.map((item, i) => (
          <GlassCard key={i} className="p-6">
            <h3 className="text-xl font-semibold text-white/90">
              {item.degree || "Degree"}
            </h3>

            <p className="text-white/60 text-sm mt-1">
              {item.school || "Institution Name"}
            </p>

            {item.year && (
              <p className="text-white/40 text-sm mt-2">
                Year: {item.year}
              </p>
            )}
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Education;
