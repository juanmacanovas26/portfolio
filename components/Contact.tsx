"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLang } from '@/lib/lang-context';
import { copy } from '@/lib/copy';

const Contact = () => {
  const { lang } = useLang();
  const [nombre, setNombre] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !empresa.trim() || !mensaje.trim()) return;

    setLoading(true);
    const text = lang === 'es'
      ? `Hola Juanma, soy ${nombre} de ${empresa}. Quería consultarte: ${mensaje}`
      : `Hi Juanma, I'm ${nombre} from ${empresa}. I wanted to ask you: ${mensaje}`;
    const url = `https://wa.me/5492494609661?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setLoading(false);
    setNombre('');
    setEmpresa('');
    setMensaje('');
  };

  const handleDirect = () => {
    const url = "https://wa.me/5492494609661";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          {copy[lang].contact.title}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex flex-col items-center md:items-start mb-6">
              <img
                src="assets/juanma-06595338.jpg"
                alt="Juanma Canovas"
                className="w-36 h-36 rounded-full border border-emerald-500/20 shadow-lg shadow-black/40 object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{copy[lang].contact.subtitle}</h3>
            <p className="text-muted-foreground mb-6">
              {copy[lang].contact.description}
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-semibold mr-2">{copy[lang].contact.email}</span>
                <span className="text-muted-foreground">{copy[lang].contact.emailValue}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">{copy[lang].contact.linkedin}</span>
                <span className="text-muted-foreground">{copy[lang].contact.linkedinValue}</span>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <Input
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder={copy[lang].contact.namePlaceholder}
              />
            </div>
            <div>
              <Input
                required
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                placeholder={copy[lang].contact.empresaPlaceholder}
              />
            </div>
            <div>
              <Textarea
                required
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder={copy[lang].contact.messagePlaceholder}
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Enviando...' : copy[lang].contact.submit}
            </Button>
            <Button variant="outline" onClick={handleDirect} className="w-full">
              {copy[lang].contact.directButton}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;