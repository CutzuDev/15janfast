import Nav from "@/components/mainNav";

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
    </>
  );
}
