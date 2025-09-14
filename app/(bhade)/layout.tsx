import { ReactNode, Suspense } from "react";
import Skeleton from "@/components/Skeleton";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const BhadheLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Navbar />
      <section className="flex absolute top-16 left-0">
        <Sidebar />
        <main className="md:ml-[200px] ml-0 p-4 w-screen md:w-[calc(100vw-200px)] bg-gray-50">
          {children}
        </main>
      </section>
    </Suspense>
  );
};

export default BhadheLayout;
