export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-5xl font-bold mb-8">
          D2 Arsenal
        </h1>

        <input
          type="text"
          placeholder="Search weapons..."
          className="w-full p-4 rounded-lg bg-zinc-900 border border-zinc-700 mb-8"
        />

        <div className="grid grid-cols-2 gap-6 mb-8">

          <div className="bg-zinc-900 rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">
              Popular PvP Weapons
            </h2>

            <div className="space-y-2">
              <div className="bg-zinc-800 p-3 rounded">
                Rose
              </div>

              <div className="bg-zinc-800 p-3 rounded">
                Matador 64
              </div>

              <div className="bg-zinc-800 p-3 rounded">
                The Immortal
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4">
              Popular PvE Weapons
            </h2>

            <div className="space-y-2">
              <div className="bg-zinc-800 p-3 rounded">
                Apex Predator
              </div>

              <div className="bg-zinc-800 p-3 rounded">
                Edge Transit
              </div>

              <div className="bg-zinc-800 p-3 rounded">
                Forbearance
              </div>
            </div>
          </div>

        </div>

        <div className="bg-zinc-900 rounded-lg p-6">

          <h2 className="text-3xl font-bold mb-6">
            Rose
          </h2>

          <div className="grid grid-cols-5 gap-4">

            <div className="bg-zinc-800 p-4 rounded">
              <h3 className="font-bold mb-2">
                Barrel
              </h3>

              <div>Smallbore</div>
              <div>Hammer-Forged</div>
            </div>

            <div className="bg-zinc-800 p-4 rounded">
              <h3 className="font-bold mb-2">
                Magazine
              </h3>

              <div>Accurized</div>
              <div>Steady Rounds</div>
            </div>

            <div className="bg-zinc-800 p-4 rounded">
              <h3 className="font-bold mb-2">
                Trait 1
              </h3>

              <div>Slideshot</div>
              <div>Perpetual Motion</div>
            </div>

            <div className="bg-zinc-800 p-4 rounded">
              <h3 className="font-bold mb-2">
                Trait 2
              </h3>

              <div>Opening Shot</div>
              <div>Explosive Payload</div>
            </div>

            <div className="bg-zinc-800 p-4 rounded">
              <h3 className="font-bold mb-2">
                Masterwork
              </h3>

              <div>Range</div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}