"use client";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex place-items-center mt-60">
        <button
          className="text-xl bg-green-700 p-3 rounded-lg font-mono"
          onClick={handleClickOpen}
        >
          Generate Reports
        </button>
        {open && (
          <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
            <div className="flex justify-between items-center bg-white rounded-lg p-5 w-auto">
              <h2 className="text-xl text-black font-semibold ml-60">
                Recently Generated Reports
              </h2>
              <div className="flex justify-end ml-32">
                <button
                  onClick={handleClickClose}
                  className=" text-black font-bold border border-gray-800 rounded px-2"
                >
                  &#10006;
                </button>
                <button
                  onClick={handleClickClose}
                  className="text-black font-bold border border-gray-800 rounded px-2 ml-3"
                >
                  &#10006;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
