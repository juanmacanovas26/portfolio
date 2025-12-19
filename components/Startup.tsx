"use client";

import { motion } from 'framer-motion';
import { Globe, Bot, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLang } from '@/lib/lang-context';
import { copy } from '@/lib/copy';

const iconMap = { Globe, Bot, Settings };

const Startup = () => {
  const { lang } = useLang();

  return (
    <section id="startup" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-primary"
        >
          {copy[lang].startup.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm text-emerald-400 font-medium text-center mb-4"
        >
          Juanma Canovas — Co-Founder & Automation Engineer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 md:p-12 hover:shadow-lg hover:-translate-y-1 transition-all"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">{copy[lang].startup.mainTitle}</h3>
            <p className="text-xl text-muted-foreground mb-4">{copy[lang].startup.subheadline}</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">{copy[lang].startup.description}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {copy[lang].startup.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold">{feature.name}</h4>
                </motion.div>
              );
            })}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" onClick={() => window.open('https://dsfp.space/', '_blank', 'noopener,noreferrer')}>
              {copy[lang].startup.buttons.links}
            </Button>
            <Button variant="outline" onClick={() => window.open('https://instagram.com/digital_solutions_fp', '_blank', 'noopener,noreferrer')}>
              {copy[lang].startup.buttons.instagram}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Startup;