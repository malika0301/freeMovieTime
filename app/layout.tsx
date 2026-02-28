import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Categories from '@/components/Categories';
import Container from '@/components/Container';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body className="bg-[#0f0f0f]">
        <Container>
          <Header />
          {children}
          <Categories />
          <Footer />
        </Container>
      </body>
    </html>
  );
}