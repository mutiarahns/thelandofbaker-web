export default function App() {
  return (
    <div className="w-full mx-auto flex min-h-screen flex-col px-4 py-8 xl:w-full">
      <header className="mb-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h1 className="mb-4 text-2xl font-bold">The Land of Baker</h1>
        </div>
      </header>

      <div className="flex-[1]">...</div>

      <footer>
        <p className="pt-5 text-center text-sm">
          Copyright © {new Date().getFullYear()} The Land of Baker. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
