import React from "react";
import useContent from "../../hooks/useContent";
import GlassCard from "../ui/GlassCard";

const Experience = () => {
  const content = useContent();
  const xp = content?.experience || []; // Array of objects

  return (
    <section
      id="experience"
      className="py-32 px-8 animate-fadeInUp"
    >
      <h2 className="text-center text-4xl font-semibold mb-14">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {xp.map((item, index) => (
          <GlassCard key={index} className="p-6">

            {/* Role */}
            <h3 className="text-2xl font-semibold text-white/90">
              {item.role || "Job Role"}
            </h3>

            {/* Company + Period */}
            <p className="text-white/60 text-sm mb-3">
              {(item.company || "Company Name") +
                (item.period ? ` • ${item.period}` : "")}
            </p>

            {/* Optional Details Array */}
            {Array.isArray(item.details) && item.details.length > 0 && (
              <ul className="mt-3 space-y-2 text-white/70 text-sm">
                {item.details.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            )}

          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Experience;
