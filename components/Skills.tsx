"use client";

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { copy } from '@/lib/copy';

const skills = [
  { icon: Code, nameKey: 'frontend' },
  { icon: Database, nameKey: 'backend' },
  { icon: Cloud, nameKey: 'cloud' },
  { icon: Smartphone, nameKey: 'mobile' },
];

const Skills = () => {
  const { lang } = useLang();

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          {copy[lang].skills.title}
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <skill.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold">{(copy[lang].skills as any)[skill.nameKey]}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;