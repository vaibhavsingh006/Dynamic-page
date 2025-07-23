import React from "react";
import { Grid3X3, List, LayoutGrid, StretchHorizontal } from "lucide-react";

export default function ViewToggle({ viewMode, onViewModeChange }) {
  return (
    <div className="flex overflow-hidden">
      <LayoutGrid
        onClick={() => onViewModeChange("grid")}
        className={`w-8 h-8 mr-2 cursor-pointer ${
          viewMode === "grid"
            ? "text-[#1F5F8D]"
            : "bg-white text-gray-400 hover:bg-gray-50"
        }`}
        title="Grid View"
      />
      <StretchHorizontal
        onClick={() => onViewModeChange("list")}
        className={` w-8 h-8 cursor-pointer ${
          viewMode === "list"
            ? "text-[#1F5F8D]"
            : "bg-white text-gray-400 hover:bg-gray-50"
        }`}
        title="List View"
      />
    </div>
  );
}
