import React from "react";
import { Calendar, Download, MapPin, FileText, BarChart3 } from "lucide-react";
import logoImg from "/images.png";
import storm from "/storm.png";
import pdf from "/pdf.png";
import json from "/json.png";
import csv from "/csv.png";
import xml from "/xml.png";

export default function DatasetList({ datasets }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-4 mb-8 ">
      {datasets.map((dataset) => (
        <div
          key={dataset.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 py-6 px-7"
        >
          <div className="flex gap-6">
            <div className="flex-1 w-[-webkit-fill-available]">
              <h3 className="text-lg font-semibold text-[#194C71] hover:text-[#316e9a] cursor-pointer mb-2">
                {dataset.title}
              </h3>

              <p className="text-gray-700 text-sm sm:text-start text-justify mb-3">
                {dataset.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1 pr-3">
                  <Calendar className="w-4 h-4 text-[#B17F3D]" />
                  <p className="text-gray-500">
                    Last Update:{" "}
                    <span className="text-black">
                      {formatDate(dataset.created)}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1 pr-3">
                  <Download className="w-4 h-4 text-[#B17F3D]" />
                  <p className="text-gray-500">
                    Downloads:{" "}
                    <span className="text-black">
                      {dataset.download_count || 500}+
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1 pr-3">
                  <MapPin className="w-4 h-4 text-[#B17F3D]" />
                  <p className="text-gray-500">
                    Geography:{" "}
                    <span className="text-black">
                      {dataset.geography || "Global"}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1 ">
                  <BarChart3 className="w-4 h-4 text-[#B17F3D]" />
                  <span>With Chart</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                <div className="text-sm text-gray-500 inline-flex items-center">
                  Selectors:{" "}
                  <img
                    src={storm}
                    alt={dataset.organization.name || "Unknown"}
                    className="rounded-full ml-2 w-[30px] h-[30px] object-contain p-[6px] border border-gray-300"
                  />
                </div>
                <div className="text-sm text-gray-500 inline-flex items-center">
                  published by{" "}
                  <img
                    src={logoImg}
                    alt={dataset.organization.name || "Unknown"}
                    className="rounded-full ml-2 w-[30px] h-[30px] object-contain p-1 border border-gray-300"
                  />
                </div>
                {dataset.tags && dataset.tags.length > 0 && (
                  <div className=" inline-flex flex-wrap items-center gap-1 mb-3">
                    <span className="text-sm text-gray-500">Tags: </span>
                    {dataset.tags.slice(0, 5).map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#84DCCF] border border-[#75A9A2] font-semibold text-gray-700 text-sm rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {dataset.tags.length > 5 && (
                      <span className="px-3 py-1 bg-[#84DCCF] border border-[#75A9A2] font-semibold text-gray-700 text-sm rounded">
                        +{dataset.tags.length - 5} more
                      </span>
                    )}
                  </div>
                )}
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="text-sm text-gray-500">Formats: </span>

                  <div className="inline-flex items-center">
                    {dataset.formats && dataset.formats.length > 0 ? (
                      <span className="text-gray-500 flex flex-wrap font-semibold text-sm">
                        {dataset.formats
                          .map((format) => {
                            if (format === "PDF") {
                              return (
                                <img
                                  key={format}
                                  src={pdf}
                                  alt="PDF"
                                  className="ml-2 w-[25px] h-[25px] object-contain"
                                />
                              );
                            }
                            if (format === "JSON") {
                              return (
                                <img
                                  key={format}
                                  src={json}
                                  alt="JSON"
                                  className="ml-2 w-[25px] h-[25px] object-contain"
                                />
                              );
                            }
                            if (format === "CSV") {
                              return (
                                <img
                                  key={format}
                                  src={csv}
                                  alt="CSV"
                                  className="ml-2 w-[25px] h-[25px] object-contain"
                                />
                              );
                            }
                            if (format === "XML") {
                              return (
                                <img
                                  key={format}
                                  src={xml}
                                  alt="XML"
                                  className="ml-2 w-[25px] h-[25px] object-contain"
                                />
                              );
                            }
                            return null;
                          })
                          .reduce((prev, curr) => [prev, " ", curr])}
                      </span>
                    ) : (
                      <span className="text-gray-500">Not specified</span>
                    )}
                  </div>
                  {/* 
                  {dataset.formats && dataset.formats.length > 0 ? (
                    <span className="text-gray-500 font-semibold text-sm">
                      {dataset.formats.join(", ")}
                    </span>
                  ) : (
                    <span className="text-gray-500">Not specified</span>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
