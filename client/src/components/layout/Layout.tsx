import { Header } from './Header';
import { Footer } from './Footer';
import { StarryBackground } from '@/components/ui/StarryBackground';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <StarryBackground />
      <Header />
      <main className="min-h-screen pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
