"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLang } from '@/lib/lang-context';
import { copy } from '@/lib/copy';

const Hero = () => {
  const { lang } = useLang();

  return (
    <section id="hero" className="min-h-[90vh] md:min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {copy[lang].hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          {copy[lang].hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            {copy[lang].hero.ctaPrimary}
          </Button>
          <Button variant="outline" size="lg">
            {copy[lang].hero.ctaSecondary}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;