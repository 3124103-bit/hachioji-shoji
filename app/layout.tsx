import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "八王子商事｜農機具・金属くず買取、片付け・倉庫解体",
  description: "農機具、建設機械、工具、車両、鉄・非鉄金属などを幅広く買取。倉庫・工場の片付け、ビニールハウス・倉庫の解体、物々交換もご相談ください。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
