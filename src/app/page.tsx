import { Topbar } from "./ui/topbar"

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Landing Page</h1>
        <p className="text-lg">This is a sample landing page built with Next.js 15, shadcn/ui, and Tailwind CSS.</p>
      </main>
    </div>
  )
}

