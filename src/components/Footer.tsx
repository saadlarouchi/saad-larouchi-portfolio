import { Container } from '@/components/ui/Container';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative border-t" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
      <Container className="py-16 flex items-center justify-center">
        <p className="text-sm text-center" style={{ color: 'var(--text-tertiary)' }}>
          © {new Date().getFullYear()} Saad Larouchi. {t('footer.rights')}
        </p>
      </Container>
    </footer>
  );
}
