import { Header } from "@/components/layout/Header";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      <Header />

      <div className="mt-[70px]">{children}</div>
    </main>
  );
}
