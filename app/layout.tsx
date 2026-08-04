import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "八王子商事｜農機具・金属くず買取、片付け・倉庫解体",
  description: "農機具、建設機械、電子機器全般、車両、鉄・非鉄金属などを幅広く買取。倉庫・工場の片付け、ビニールハウス・倉庫の解体、物々交換もご相談ください。",
  metadataBase: new URL("https://3124103-bit.github.io/hachioji-shoji/"),
  openGraph: { title: "八王子商事｜買取・片付け・倉庫解体", description: "機械・金属くずの買取から、倉庫・工場の片付け、倉庫・ビニールハウスの解体まで。", images: ["assets/photos/warehouse-before.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
