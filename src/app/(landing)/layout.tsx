import Footer from "@/components/universal/footer";
import Nav from "@/components/universal/mainNav";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <div className="h-20" />
      {children}
      <Footer />
    </>
  );
}
