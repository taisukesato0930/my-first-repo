export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-accent/20 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-wide text-accent-dark">
            はばちゃんサイト
          </span>
          <nav className="hidden gap-8 text-sm font-medium text-foreground/80 sm:flex">
            <a href="#about" className="transition hover:text-accent-dark">
              About
            </a>
            <a href="#highlights" className="transition hover:text-accent-dark">
              楽しみ方
            </a>
            <a href="#gallery" className="transition hover:text-accent-dark">
              ギャラリー
            </a>
            <a href="#contact" className="transition hover:text-accent-dark">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sub/20 blur-3xl" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-sub uppercase">
            Travel Diary
          </p>
          <h1 className="text-3xl leading-snug font-extrabold text-accent-dark sm:text-5xl sm:leading-tight">
            おいしいものを堪能しよう！
            <br />
            温泉に癒されよう！
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            はばちゃんサイトは、旅先で出会った美味しいごはんとほっとする温泉の記録をつづる旅行体験記です。
          </p>
          <a
            href="#about"
            className="mt-10 rounded-full bg-accent px-8 py-3 text-sm font-bold text-white shadow-md shadow-accent/30 transition hover:bg-accent-dark"
          >
            旅の記録を見る
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-card px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold tracking-widest text-sub uppercase">
            About
          </h2>
          <p className="mt-4 text-2xl font-bold text-accent-dark sm:text-3xl">
            旅先の &ldquo;おいしい&rdquo; と &ldquo;ほっとする&rdquo; を記録しています
          </p>
          <p className="mt-6 leading-relaxed text-foreground/70">
            全国各地を旅しながら出会ったご当地グルメや、疲れを癒してくれる温泉宿の様子を、写真とともにゆったり紹介しています。
            次の旅の計画にぜひ役立ててくださいね。
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-sm font-semibold tracking-widest text-sub uppercase">
            楽しみ方
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-accent/20 bg-card p-8 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-3xl">
                🍽️
              </div>
              <h3 className="mt-6 text-xl font-bold text-accent-dark">
                おいしいものを堪能しよう
              </h3>
              <p className="mt-3 leading-relaxed text-foreground/70">
                旅先で出会ったご当地グルメや隠れた名店の味を、写真とともにレポートします。
              </p>
            </div>
            <div className="rounded-2xl border border-sub/20 bg-card p-8 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sub/15 text-3xl">
                ♨️
              </div>
              <h3 className="mt-6 text-xl font-bold text-accent-dark">
                温泉に癒されよう
              </h3>
              <p className="mt-3 leading-relaxed text-foreground/70">
                旅の疲れを癒してくれる温泉宿や湯めぐりの様子を、のんびりとした雰囲気でお届けします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section id="gallery" className="bg-card px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-sm font-semibold tracking-widest text-sub uppercase">
            Gallery
          </h2>
          <p className="mt-4 text-2xl font-bold text-accent-dark sm:text-3xl">
            旅の思い出フォトギャラリー
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {["ごはん", "温泉", "景色"].map((label) => (
              <div
                key={label}
                className="flex aspect-square flex-col items-center justify-center rounded-2xl border-2 border-dashed border-accent/30 bg-background text-foreground/50"
              >
                <span className="text-3xl">🖼️</span>
                <span className="mt-2 text-sm">{label}の写真</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-foreground/60">
            画像・動画ファイルを public フォルダに入れてもらえれば、ここに表示できます。
          </p>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-2xl rounded-3xl bg-accent/10 px-8 py-14 text-center">
          <h2 className="text-2xl font-bold text-accent-dark sm:text-3xl">
            次の旅の計画に、はばちゃんサイトを
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/70">
            おすすめのグルメや温泉情報を随時更新中です。ぜひまた遊びに来てくださいね。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-accent/20 px-6 py-8 text-center text-sm text-foreground/50">
        © {new Date().getFullYear()} はばちゃんサイト
      </footer>
    </div>
  );
}
