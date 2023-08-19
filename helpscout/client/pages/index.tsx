import Header from "@/components/shared/header";
import Initial from "@/components/text/initial";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header/>
      <div className="flex flex-col">
          <Initial/>
      </div>
    </main>
  );
}
