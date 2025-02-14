import Footer from "@/components/footer";
import Header from "@/components/header";
import CTA from "@/components/home/cta";

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
