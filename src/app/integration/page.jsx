"use client";

import Tabss from "@/components/tabs/tabs";
import { Plus } from "lucide-react";
import React from "react";

const Integration = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 p-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Integrations</h2>
        <button className="md:text-sm max-sm:text-xs font-semibold flex gap-1 border py-2 pl-2 pr-3 max-sm:px-3 items-center rounded-md">
          <Plus size={18} /> Custom Integration
        </button>
      </div>{" "}
      <br />
      <p>
        Supercharge your workflow and connect the tool you and your team uses
        every day
      </p>
      <div className="mt-8">
        <Tabss />
      </div>
    </div>
  );
};

export default Integration;
