import { useLang } from '@/lib/lang-context';
import { copy } from '@/lib/copy';

const Footer = () => {
  const { lang } = useLang();

  return (
    <footer className="bg-card py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground">
          {copy[lang].footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;