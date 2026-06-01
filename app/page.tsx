import Image from "next/image";
import {
  BookOpen,
  CircleDollarSign,
  Clock,
  Coffee,
  ExternalLink,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Train,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PHONE_NUMBER = "03-6709-6144";
const PHONE_HREF = "tel:0367096144";
const LINE_HREF = "https://lin.ee/ddpoker-takadanobaba";
const OFFICIAL_SITE = "https://www.dd-poker.com/";

const LOGO_WIDTH = 512;
const LOGO_HEIGHT = 512;

function BrandLogo({
  variant = "header",
  className = "",
}: {
  variant?: "header" | "footer";
  className?: string;
}) {
  const sizeClass =
    variant === "header"
      ? "h-9 w-auto sm:h-11"
      : "h-16 w-auto sm:h-20";

  return (
    <Image
      src="/logo.png"
      alt="D.D Poker 高田馬場"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={variant === "header"}
      className={`object-contain ${sizeClass} ${className}`}
    />
  );
}

function LineIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

function CtaButtons({
  size = "default",
  className = "",
}: {
  size?: "default" | "compact";
  className?: string;
}) {
  const buttonBase =
    size === "compact"
      ? "flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-bold shadow-md transition hover:brightness-110 active:scale-[0.98] sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
      : "flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-bold shadow-lg transition hover:brightness-110 active:scale-[0.98] sm:text-lg";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={LINE_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBase} bg-[#06C755] text-white`}
      >
        <LineIcon className="h-5 w-5 shrink-0" />
        LINEで予約・相談
      </a>
      <a
        href={PHONE_HREF}
        className={`${buttonBase} bg-orange-primary text-black ring-2 ring-black/20`}
      >
        <Phone className="h-5 w-5 shrink-0" />
        {size === "compact" ? (
          <span className="leading-snug">電話予約</span>
        ) : (
          <span className="text-center leading-snug">
            電話で予約
            <br />
            {PHONE_NUMBER}
          </span>
        )}
      </a>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-10">
      <p
        className={`mb-2 text-xs font-bold tracking-widest text-orange-primary uppercase sm:text-sm`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-xl font-black leading-tight sm:text-2xl md:text-3xl ${dark ? "text-white" : "text-black"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-sm font-medium leading-relaxed sm:mt-4 sm:text-base md:text-lg ${dark ? "text-white/85" : "text-stone-700"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border-2 border-orange-primary/30 bg-white p-4 shadow-lg transition hover:-translate-y-1 hover:border-orange-primary/60 hover:shadow-xl sm:rounded-3xl sm:p-6">
      <div className="mb-3 inline-flex rounded-xl bg-[linear-gradient(to_right,#f29600,#ffef00)] p-2.5 text-black shadow-sm sm:mb-4 sm:rounded-2xl sm:p-3">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-base font-black text-black sm:mb-3 sm:text-lg">{title}</h3>
      <p className="text-sm font-medium leading-relaxed text-stone-700 sm:text-base">{description}</p>
    </div>
  );
}

function PainPointCard({
  icon: Icon,
  text,
}: {
  icon: LucideIcon;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-lg ring-2 ring-orange-primary/40 sm:gap-4 sm:p-5">
      <div className="rounded-xl bg-[linear-gradient(to_right,#f29600,#ffef00)] p-2 text-black shadow-sm sm:p-2.5">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <p className="pt-0.5 text-sm font-bold leading-relaxed text-black sm:pt-1 sm:text-base">
        {text}
      </p>
    </div>
  );
}

function PlanFeature({
  icon: Icon,
  text,
}: {
  icon: LucideIcon;
  text: string;
}) {
  return (
    <li className="flex items-center gap-3 rounded-xl bg-orange-light px-4 py-3 ring-1 ring-orange-primary/30">
      <Icon className="h-5 w-5 shrink-0 text-orange-dark" aria-hidden="true" />
      <span className="font-bold text-black">{text}</span>
    </li>
  );
}

function ShopInfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 border-b border-white/15 py-4 last:border-b-0">
      <div className="mt-0.5 text-orange-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <dt className="mb-1 text-sm font-black text-orange-primary">{label}</dt>
        <dd className="font-medium leading-relaxed text-white">{children}</dd>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 bg-[linear-gradient(to_right,#f29600,#ffef00)] shadow-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3">
          <BrandLogo variant="header" className="drop-shadow-sm" />
          <a
            href="#cta"
            className="inline-flex shrink-0 rounded-full bg-black px-3 py-1.5 text-xs font-bold text-white shadow-md transition hover:bg-dark-brown sm:px-4 sm:py-2 sm:text-sm"
          >
            <span className="sm:hidden">予約</span>
            <span className="hidden sm:inline">来店・予約はこちら</span>
          </a>
        </div>
      </header>

      <main className="pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:pb-8">
        {/* Hero */}
        <section className="relative overflow-hidden bg-dark-brown">
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-orange-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-orange-gold/20 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 md:py-20">
            <div className="mb-5 inline-flex max-w-full items-center gap-1.5 rounded-full bg-[linear-gradient(to_right,#f29600,#ffef00)] px-3 py-1.5 text-xs font-black text-black shadow-lg sm:mb-6 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" aria-hidden="true" />
              <span className="leading-snug">
                <span className="sm:hidden">
                  東京・高田馬場
                  <br />
                  ポーカー初心者大歓迎
                </span>
                <span className="hidden sm:inline">東京・高田馬場｜ポーカー初心者大歓迎</span>
              </span>
            </div>

            <h1 className="max-w-3xl text-[1.625rem] font-black leading-snug tracking-tight text-white sm:text-3xl sm:leading-tight md:text-4xl lg:text-5xl">
              ポーカーを始めてみたいけど、
              <br />
              <span className="text-orange-primary">始め方がわからない…</span>
              <br className="sm:hidden" />
              <span className="md:whitespace-nowrap">そんなあなたへ！</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base font-bold leading-relaxed text-white/90 sm:mt-5 sm:text-lg md:text-xl">
              東京・高田馬場のD.D Pokerで、楽しくポーカーデビューしませんか？
            </p>

            <div className="mt-6 rounded-2xl border-2 border-orange-gold/60 bg-[linear-gradient(to_right,#f29600,#ffef00)] p-4 shadow-2xl sm:mt-8 sm:rounded-3xl sm:p-6 md:p-8">
              <p className="text-xs font-black text-black/80 sm:text-sm md:text-base">
                今だけお得な初心者プラン
              </p>
              <div className="mt-2 text-base font-black leading-relaxed text-black sm:text-xl sm:leading-snug md:text-2xl">
                <p>
                  初心者講習＋チップ
                  <span className="text-[1.15em] font-black text-[#e60012] sm:text-[1.2em] md:text-[1.15em]">
                    『無制限』
                  </span>
                  遊び放題
                  <span className="whitespace-nowrap">
                    プラン
                    <span className="text-sm font-bold sm:text-[0.85em]">
                      （1ドリンク・消費税込み）
                    </span>
                  </span>
                </p>
                <div className="price-sparkle-wrap">
                  <span className="price-sparkle-text">5,000円ポッキリ！</span>
                  <span className="price-sparkle-star price-sparkle-star-1" aria-hidden="true">
                    ✦
                  </span>
                  <span className="price-sparkle-star price-sparkle-star-2" aria-hidden="true">
                    ✦
                  </span>
                  <span className="price-sparkle-star price-sparkle-star-3" aria-hidden="true">
                    ✦
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <CtaButtons />
              <p className="mt-3 flex items-center justify-center gap-2 text-center text-sm font-black text-white sm:mt-4 sm:text-base md:text-lg">
                <Zap className="h-5 w-5 shrink-0 fill-orange-primary text-orange-primary" />
                予約なしでの飛び込み来店も大歓迎！
              </p>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-dark-brown py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeading
              dark
              eyebrow="こんなお悩みありませんか？"
              title="ポーカー初心者の「不安」、わかります"
              description={
                <>
                  はじめてのポーカーはルールも雰囲気もわからなくて不安ですよね。<br />D.D Pokerは、その気持ちに寄り添うお店です。
                </>
              }
            />

            <div className="grid gap-4 sm:grid-cols-3">
              <PainPointCard
                icon={BookOpen}
                text="ルールが全くわからない…用語も多くて、何から覚えればいいか不安"
              />
              <PainPointCard
                icon={Users}
                text="一人で行っても大丈夫？知り合いがいなくて、入りにくいかも…"
              />
              <PainPointCard
                icon={CircleDollarSign}
                text="お金がいくらかかるか不安…追加料金が発生しないか心配"
              />
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="bg-gradient-to-b from-[#fff3d6] via-background to-[#fff8eb] py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="D.D Pokerが選ばれる理由"
              title="ここなら、怖くない。楽しくデビューできる！"
              description="カジノのイメージを覆す、あたたかくてポップな空間。スタッフがしっかりサポートするので、初めてでも安心です。"
            />

            <div className="grid gap-6 md:grid-cols-3">
              <FeatureCard
                icon={UserCheck}
                title="おひとり様でも大歓迎"
                description="カジノディーラーが基本ルールから親切丁寧に教えます。質問しやすい雰囲気なので、一人来店の方も多数いらっしゃいます。"
              />
              <FeatureCard
                icon={ShieldCheck}
                title="安心の環境"
                description="初心者だけのテーブルでスタッフと一緒に楽しく学べます。いきなり上級者ばかりのテーブルに放り込まれる心配はありません。"
              />
              <FeatureCard
                icon={Train}
                title="好立地"
                description="JR・東京メトロ東西線・西武新宿線の高田馬場駅から徒歩4分。仕事帰りやお出かけのついでにも気軽にお立ち寄りいただけます。"
              />
            </div>
          </div>
        </section>

        {/* Plan Details */}
        <section className="bg-dark-brown py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeading
              dark
              eyebrow="プラン詳細"
              title={
                <>
                  初心者講習＋チップ無制限
                  <br className="sm:hidden" />
                  遊び放題プラン
                </>
              }
              description="追加料金なしの明朗会計。はじめての方に必要なものがすべてコミコミです。"
            />

            <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-[linear-gradient(to_right,#f29600,#ffef00)] shadow-2xl ring-2 ring-orange-gold/50 sm:rounded-3xl sm:ring-4">
              <div className="px-4 py-6 text-center text-black sm:px-6 sm:py-8 md:px-10">
                <p className="text-xs font-black text-black sm:text-sm">初めての方にオススメ</p>
                <p className="mt-2 text-base font-black leading-relaxed sm:text-xl sm:leading-snug md:text-2xl">
                  初心者講習＋チップ
                  <span className="text-[1.15em] font-black text-[#e60012] sm:text-[1.2em] md:text-[1.15em]">
                    『無制限』
                  </span>
                  <br className="sm:hidden" />
                  遊び放題プラン
                </p>
                <div className="mt-3 flex flex-wrap items-end justify-center gap-x-1 gap-y-1 sm:mt-4">
                  <span className="text-base font-black sm:text-lg">料金</span>
                  <span className="text-4xl font-black leading-none sm:text-5xl md:text-6xl">
                    5,000
                  </span>
                  <span className="pb-1 text-base font-black sm:pb-2 sm:text-lg">円（税込）</span>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 md:p-8">
                <p className="mb-5 text-center text-sm font-black text-orange-primary">
                  プランに含まれるもの
                </p>
                <ul className="space-y-3">
                  <PlanFeature
                    icon={BookOpen}
                    text="1時間みっちり初心者講習"
                  />
                  <PlanFeature
                    icon={Sparkles}
                    text="チップ無制限遊び放題"
                  />
                  <PlanFeature icon={Coffee} text="1ドリンク付き" />
                </ul>

                <div className="mt-6 flex items-start gap-3 rounded-2xl border-2 border-dashed border-orange-primary/40 bg-orange-light p-4">
                  <HeartHandshake
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-primary"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-black leading-relaxed text-black sm:text-base">
                    表示料金以外の追加料金は一切なし！
                    <br />
                    明朗会計で、初めての方も安心してご来店いただけます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="bg-gradient-to-b from-[#f5d78e] via-[#f8e8b8] to-background py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="rounded-2xl bg-[linear-gradient(to_right,#f29600,#ffef00)] p-5 text-center text-black shadow-2xl ring-2 ring-black/10 sm:rounded-3xl sm:p-8 sm:ring-4 md:p-12">
              <div className="mx-auto mb-6 max-w-2xl sm:mb-10">
                <p className="mb-2 text-xs font-black tracking-widest text-black uppercase sm:text-sm">
                  来店・予約方法
                </p>
                <h2 className="text-xl font-black leading-tight text-black sm:text-2xl md:text-3xl">
                  思い立ったらすぐ遊べる！
                  <br />
                  予約なしでのご来店も大歓迎です。
                </h2>
                <p className="mt-3 text-sm font-bold leading-relaxed text-black sm:mt-4 sm:text-base md:text-lg">
                  席を確実に確保したい方は、お電話またはLINEからご予約ください。
                </p>
              </div>

              <div className="mx-auto max-w-xl">
                <div className="rounded-2xl bg-black/15 p-4 backdrop-blur-sm ring-2 ring-black/10 sm:p-6">
                  <CtaButtons />
                </div>
              </div>

              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-bold text-white sm:mt-6 sm:px-5 sm:text-sm md:text-base">
                <Zap className="h-4 w-4 fill-white" aria-hidden="true" />
                そのまま来店OK！お気軽にどうぞ
              </p>
            </div>
          </div>
        </section>

        {/* Footer / Shop Info */}
        <footer>
          <div className="bg-gradient-to-b from-[#f5d78e] via-[#f8e8b8] to-background py-10 sm:py-14 md:py-16">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
                <BrandLogo variant="footer" className="drop-shadow-md" />
                <div className="text-center sm:text-left">
                  <p className="text-sm font-black text-orange-dark">Shop Info</p>
                  <h2 className="mt-1 text-2xl font-black text-black sm:text-3xl">
                    D.D Poker 高田馬場
                  </h2>
                </div>
              </div>

              <dl className="mx-auto max-w-xl rounded-2xl bg-black/85 p-4 text-white shadow-xl ring-2 ring-orange-primary/40 sm:p-6 md:p-8">
                <ShopInfoRow icon={Clock} label="営業時間">
                  14:00〜24:00（年中無休）
                </ShopInfoRow>
                <ShopInfoRow icon={Train} label="アクセス">
                  各線 高田馬場駅から徒歩4分
                </ShopInfoRow>
                <ShopInfoRow icon={MapPin} label="住所">
                  〒169-0075
                  <br />
                  東京都新宿区高田馬場1-22-7 高田馬場富士ビル2F
                </ShopInfoRow>
                <ShopInfoRow icon={ExternalLink} label="公式ホームページ">
                  <a
                    href={OFFICIAL_SITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-wrap items-center gap-1 break-all font-bold text-orange-gold underline-offset-4 transition hover:text-orange-primary hover:underline"
                  >
                    https://www.dd-poker.com/
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </ShopInfoRow>
              </dl>
            </div>
          </div>

          <div className="bg-black py-6 text-center text-sm text-stone-400">
            <p>&copy; {new Date().getFullYear()} D.D Poker 高田馬場</p>
          </div>
        </footer>
      </main>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-orange-primary/40 bg-white p-2.5 shadow-[0_-4px_24px_rgba(242,150,0,0.2)] pb-[max(0.625rem,env(safe-area-inset-bottom))] sm:hidden">
        <CtaButtons size="compact" />
      </div>
    </>
  );
}
