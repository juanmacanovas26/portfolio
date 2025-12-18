"use client";

import { motion } from 'framer-motion';
import { useLang } from '@/lib/lang-context';
import { copy } from '@/lib/copy';

const Experience = () => {
  const { lang } = useLang();

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          {copy[lang].experience.title}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{copy[lang].experience.subtitle}</h3>
            <p className="text-muted-foreground mb-6">
              {copy[lang].experience.description}
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>{copy[lang].experience.bullet1}</li>
              <li>{copy[lang].experience.bullet2}</li>
              <li>{copy[lang].experience.bullet3}</li>
              <li>{copy[lang].experience.bullet4}</li>
              <li>{copy[lang].experience.bullet5}</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card p-8 rounded-lg shadow-lg"
          >
            <h4 className="text-xl font-semibold mb-4">{copy[lang].experience.statsTitle}</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{copy[lang].experience.stat1}</div>
                <div className="text-sm text-muted-foreground">{copy[lang].experience.stat1Desc}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{copy[lang].experience.stat2}</div>
                <div className="text-sm text-muted-foreground">{copy[lang].experience.stat2Desc}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;