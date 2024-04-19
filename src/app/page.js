"use client";

import { useState } from "react";
import DialogBoxContent from "./components/dialogBoxContent/page";

export default function Home() {
  const [open, setOpen] = useState(false);

  const reportData = [
    {
      date: "22.07.2021",
      reportName: "APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv",
      downloadLink: "#",
    },
    {
      date: "20.07.2021",
      reportName: "RUR_L1_01_01_2021_31_03_2021.csv",
      downloadLink: "#",
    },
    {
      date: "19.07.2021",
      reportName: "RUR_L2_(Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv",
      downloadLink: "#",
    },
  ];

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
      </div>
      <DialogBoxContent
        open={open}
        handleClickClose={handleClickClose}
        reportData={reportData}
      />
    </main>
  );
}
