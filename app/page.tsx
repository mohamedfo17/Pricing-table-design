import Image from "next/image";
import Header from "./component/Header";
export default function Home() {
  return (
   <main className="bg-[#f8f9fd] text-black">
   <Header />
   <div className="flex justify-center mt-6">
   <p className="text-center bg-white text-gray-500 border-1 rounded-xl ml-2 text-0.5xl p-1 w-50 cursor-pointer mb-6 hover:bg-blue-600 hover:text-white">No credit card requiered</p> </div> </main>
  );
}
