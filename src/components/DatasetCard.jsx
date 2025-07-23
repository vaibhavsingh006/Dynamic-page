import React from "react";
import {
  Calendar,
  Download,
  MapPin,
  FileText,
  BarChart3,
  Building,
} from "lucide-react";
import logoImg from "/images.png";

export default function DatasetCard({ dataset }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 p-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-1">
        <h3 className="text-lg font-semibold text-[#255578] hover:text-[#316e9a] cursor-pointer mb-3 line-clamp-2 leading-tight">
          {dataset.title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-gray-600 border-b-[1px] pb-3 border-gray-300 mb-1 flex-wrap">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-[#B17F3D]" />
            <span>{formatDate(dataset.created)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="w-4 h-4 text-[#B17F3D]" />
            <span>{dataset.download_count || 500}+</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-[#B17F3D]" />
            <span>{dataset.geography || "Global"}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 text-sm mb-5 line-clamp-3 leading-relaxed">
        {dataset.description}
      </p>

      <div className="flex items-center justify-between pt-4 mt-auto">
        <div className="flex items-center gap-3">
          <div className="p-1 bg-blue-50 rounded">
            <FileText className="w-4 h-4 text-[#B17F3D]" />
          </div>
          <div className="p-1 bg-orange-50 rounded">
            <BarChart3 className="w-4 h-4 text-[#B17F3D]" />
          </div>
        </div>

        <div className="text-xs text-gray-500 flex items-center gap-1">
          <span>published by</span>
          <img
            src={logoImg}
            alt={dataset.organization.name || "Unknown"}
            className="rounded-full ml-2 w-[30px] h-[30px] object-contain p-1 border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
