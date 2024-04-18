"use client";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex place-items-center mt-48">
        <button
          className="text-xl bg-green-700 p-3 rounded-lg font-mono"
          onClick={handleClickOpen}
        >
          Generate Reports
        </button>
      </div>
    </main>
  );
}
