import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "八王子商事｜北海道深川市の農機具・重機・金属買取",
  description: "北海道深川市の八王子商事。農機具、建設機械、工具、車両、鉄・非鉄金属を幅広く買取。出張買取無料、倉庫の片付けや解体もご相談ください。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
