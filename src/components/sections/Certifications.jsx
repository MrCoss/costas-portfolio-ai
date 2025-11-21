import React from "react";
import useContent from "../../hooks/useContent";
import GlassCard from "../ui/GlassCard";
import Icon from "../ui/Icon";

const Certifications = () => {
  const content = useContent();
  const certs = content?.certifications || [];

  return (
    <section
      id="certifications"
      className="py-32 px-6 md:px-12 animate-fadeInUp"
    >
      <h2 className="text-center text-4xl font-semibold mb-14">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {certs.map((cert, index) => (
          <GlassCard key={index} className="hover:scale-[1.03] transition-transform">
            
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                {cert.icon && (
                  <Icon src={cert.icon} size={50} alt={cert.title} />
                )}

                <div>
                  <h3 className="text-xl font-semibold text-white/90">
                    {cert.title}
                  </h3>

                  <p className="text-white/50 text-sm">{cert.issuer}</p>
                </div>
              </div>

              {cert.year && (
                <p className="text-white/40 text-sm mb-3">
                  Issued: {cert.year}
                </p>
              )}

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline text-sm"
                >
                  View Credential →
                </a>
              )}
            </div>

          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
