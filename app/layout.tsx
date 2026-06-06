import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const SITE_URL = "https://poker-hajimekata-tokyo.vercel.app";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "東京でポーカー初心者ならD.D Poker高田馬場！ルールから親切丁寧に教えます",
  description:
    "「ポーカーを始めてみたいけど始め方がわからない」方へ。東京・高田馬場のD.D Pokerでは初心者講習を毎日開催！おひとり様大歓迎、基本ルールから丁寧にレクチャーします。チップ無制限遊び放題＋1ドリンク込みで5,000円ポッキリ。予約不要で直接来店OK！",
  keywords: [
    "東京 ポーカー 初心者",
    "高田馬場",
    "ルール",
    "D.D Poker",
    "ポーカー 初心者",
    "ポーカー デビュー",
    "アミューズメントカジノ",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "東京でポーカー初心者ならD.D Poker高田馬場！ルールから親切丁寧に教えます",
    description:
      "「ポーカーを始めてみたいけど始め方がわからない」方へ。東京・高田馬場のD.D Pokerでは初心者講習を毎日開催！おひとり様大歓迎、基本ルールから丁寧にレクチャーします。",
    url: SITE_URL,
    siteName: "D.D Poker 高田馬場",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "東京でポーカー初心者ならD.D Poker高田馬場！",
    description:
      "初心者講習＋チップ無制限遊び放題プラン5,000円ポッキリ。予約不要で直接来店OK！",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "wVe3xhfCcPiL9ALxwhMDasa4-Qc5U1x3aIKdhZYitxA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
