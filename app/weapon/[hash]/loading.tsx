export default function LoadingWeaponPage() {
  return (
    <main className="min-h-screen bg-zinc-950 p-4 text-white">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-4 grid gap-3 lg:grid-cols-[auto_1fr] lg:items-start">
          <div className="h-12 rounded-lg border border-zinc-700 bg-zinc-900" />
          <div className="min-h-16 rounded-xl border border-sky-500/30 bg-sky-500/10 px-4 py-4 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-3 text-sky-100">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-sky-100/30 border-t-sky-100" />
              <span className="font-semibold">Loading weapon roll...</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[390px_1fr_360px]">
          <section className="contents xl:block xl:space-y-4">
            <div className="order-1 h-24 animate-pulse rounded-lg border border-zinc-800 bg-zinc-900 xl:order-none" />
            <div className="order-3 h-[360px] animate-pulse rounded-lg border border-zinc-800 bg-zinc-900 xl:order-none" />
            <div className="order-6 h-72 animate-pulse rounded-lg border border-zinc-800 bg-zinc-900 xl:order-none" />
          </section>

          <section className="contents xl:block xl:space-y-4">
            <div className="order-4 h-[520px] animate-pulse rounded-lg border border-zinc-800 bg-zinc-900 xl:order-none" />
            <div className="order-5 h-32 animate-pulse rounded-lg border border-zinc-800 bg-zinc-900 xl:order-none" />
          </section>

          <aside className="contents xl:block">
            <div className="order-2 h-[520px] animate-pulse rounded-lg border border-zinc-800 bg-zinc-900 xl:order-none" />
          </aside>
        </div>
      </div>
    </main>
  );
}
