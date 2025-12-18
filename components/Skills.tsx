"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Code, Database, Cloud, Bot } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { copy } from '@/lib/copy';

type TabKey = 'frontend' | 'backend' | 'cloud' | 'ai';

const tabs = [
  { key: 'frontend' as TabKey, icon: Code },
  { key: 'backend' as TabKey, icon: Database },
  { key: 'cloud' as TabKey, icon: Cloud },
  { key: 'ai' as TabKey, icon: Bot },
];

const Skills = () => {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState<TabKey>('frontend');

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          {copy[lang].skills.title}
        </motion.h2>

        <div className="flex flex-col items-center">
          <div role="tablist" className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                    isActive
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                      : 'bg-transparent border-border/40 text-foreground hover:bg-muted/40 hover:border-emerald-500/30'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{copy[lang].skills.tabs[tab.key].label}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              role="tabpanel"
              className="bg-card border border-border/50 rounded-lg p-6 w-full max-w-2xl"
            >
              <ul className="space-y-3">
                {copy[lang].skills.tabs[activeTab].items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;