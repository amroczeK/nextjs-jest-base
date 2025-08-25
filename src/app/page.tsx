"use client";

export default function Home() {
  const handleClick = () => {
    alert("Hello World");
  };

  return (
    <div className="font-sans min-h-screen p-8">
      <main className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Click Me!
        </button>
      </main>
    </div>
  );
}
