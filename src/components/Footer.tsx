import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="relative border-t" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
      <Container className="py-16 flex items-center justify-center">
        <p className="text-sm text-center" style={{ color: 'var(--text-tertiary)' }}>
          © {new Date().getFullYear()} Saad Larouchi. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
