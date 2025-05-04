import AboutTheDevHoverCard from "@/components/AboutTheDevHoverCard";

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-semibold text-3xl">📖 Focus Please 📖</h1>
        <p className="text-lg text-center">
          An application that helps you track how much you focus
        </p>
        <AboutTheDevHoverCard trigger={"About the dev"} />
      </div>
    </main>
  );
}
