import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/header";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <CTA />
      <Footer />
    </>
  );
}
