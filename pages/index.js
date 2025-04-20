import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Head>
        <title>Codex Lux Obscura</title>
      </Head>
      <main className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-wide">Codex Lux Obscura</h1>
        <p className="text-lg italic">"Aquí yace el conocimiento perdido de los Sacros."</p>
        <button className="mt-4 px-6 py-3 bg-gray-800 border border-gray-600 rounded hover:bg-gray-700">
          Entrar al Códice
        </button>
      </main>
    </div>
  )
}