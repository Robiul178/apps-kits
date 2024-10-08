"use client";

import { Switch } from "@/components/ui/switch";

import { Settings } from "lucide-react";
import React from "react";

const IntegrationCard = ({ name, text }) => {
  return (
    <div className="mt-5">
      <div className="flex justify-between max-sm:items-center border-b pb-2">
        <div>
          <h3>
            <span className="md:text-lg font-semibold mr-1">{name}</span>
          </h3>
          <p className="max-sm:text-sm">{text}</p>
          {/* <p>Build Custom automations and integration with other apps</p> */}
        </div>
        <div className="md:flex flex-row justify-center gap-2 items-center">
          <button className="flex hover:bg-zinc-200 transition p-2 items-center gap-1 rounded-sm">
            <Settings size={20} /> Manage
          </button>
          <Switch className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default IntegrationCard;
