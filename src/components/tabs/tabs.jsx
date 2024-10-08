"use client";

import Integration from "./integration/integration";
import { Search, SearchIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@nextui-org/react";
import React, { useState } from "react";

const Tabss = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm);

  return (
    <Tabs defaultValue="integration" className="w-full">
      <div className="md:flex justify-between">
        <div className="md:w-[65%] border-b">
          <TabsList>
            <TabsTrigger className="max-sm:ml-1" value="integration">
              All Integration
            </TabsTrigger>
            <TabsTrigger className="max-sm:ml-1" value="developer">
              Developer tools
            </TabsTrigger>
            <TabsTrigger className="max-sm:ml-1" value="communication">
              Communication
            </TabsTrigger>
            <TabsTrigger className="max-sm:ml-1" value="prodactivity">
              Prodactivity
            </TabsTrigger>
            <TabsTrigger className="max-sm:ml-1" value="browser">
              Browser tools
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="border-b md:w-[20%] max-w-sm:w-full flex items-center gap-1 pt-4">
          <Input
            type="Search"
            placeholder="Search Here....."
            onChange={(e) => setSearchTerm(e.target.value)}
            labelPlacement="outside"
            startContent={
              <SearchIcon className="text-2xl text-gray-600 pointer-events-none flex-shrink-0 mr-2 " />
            }
          />
        </div>
      </div>
      <TabsContent value="integration">
        <Integration searchTerm={searchTerm} />
      </TabsContent>
      <TabsContent value="developer">
        <h2>developer</h2>
      </TabsContent>
      <TabsContent value="communication">
        <h2>communication</h2>
      </TabsContent>
      <TabsContent value="prodactivity">
        <h2>prodactivity</h2>
      </TabsContent>
      <TabsContent value="browser">
        <h2>browser</h2>
      </TabsContent>
    </Tabs>
  );
};

export default Tabss;
