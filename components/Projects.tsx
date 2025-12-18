"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLang } from '@/lib/lang-context';
import { copy } from '@/lib/copy';

const Projects = () => {
  const { lang } = useLang();

  const projects = [
    copy[lang].projects.project1,
    copy[lang].projects.project2,
    copy[lang].projects.project3,
  ];
  
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          {copy[lang].projects.title}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
  const isFeatured = index === 1;
  const isCRM = index === 2;
  const isLMS = index === 0;
  const shouldCenter = isLMS || isCRM;
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col ${
        isFeatured ? "ring-1 ring-emerald-500/20" : ""
      }${shouldCenter ? "justify-center" : ""}`}
    >
      {isFeatured && (
        <div className="mb-3">
          <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            Proyecto principal
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

      <p className="text-muted-foreground mb-4 whitespace-pre-line">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-primary/10 text-primary text-sm rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        className="
          mt-auto w-full h-10 rounded-md
            bg-emerald-500 text-white font-medium flex items-center justify-center
            hover:bg-emerald-600
            transition-all
            hover:-translate-y-[1px]
            hover:shadow-lg hover:shadow-emerald-500/20
        "
        href={isFeatured ? "https://tienda-space.webflow.io/" : isCRM ? "https://dsfp.space/" : isLMS ? "https://2dtechnoacademy.com/" : undefined}
        target="_blank"
        rel="noopener noreferrer"
      >
        {copy[lang].projects.viewMore}
      </a>
    </motion.div>
  );
})}

        </div>
      </div>
    </section>
  );
};

export default Projects;