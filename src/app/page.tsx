import Header from "@/components/Header";
import ContinueReading from "@/components/ContinueReading";
import QuickActions from "@/components/QuickActions";
import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f6ef]">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="w-full pb-24 md:pb-8">
          <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
            <h2 className="text-3xl font-bold">
              Ассаляму алейкум!
            </h2>

            <p className="mt-2 text-gray-600">
              Добро пожаловать в Quran App
            </p>

            <ContinueReading />

            <QuickActions />
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  );
}