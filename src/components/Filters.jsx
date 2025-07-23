import React, { useState } from "react";
import { ChevronDown, ChevronUp, Minus } from "lucide-react";

export default function Filters({ filters, aggregations, onFilterChange }) {
  const [expandedSections, setExpandedSections] = useState({
    sectors: true,
    timePeriods: true,
    dataTypes: true,
    tags: false,
    licenses: false,
    geographies: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterToggle = (category, value) => {
    const currentValues = filters[category] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    onFilterChange({
      ...filters,
      [category]: newValues,
    });
  };

  const resetFilters = () => {
    onFilterChange({
      sectors: [],
      geographies: [],
      tags: [],
      formats: [],
      timePeriods: [],
      licenses: [],
    });
  };

  const FilterSection = ({ title, keyName, items, category }) => (
    <div className="border-b border-gray-200 pb-4 mb-4 last:border-b-0">
      <button
        onClick={() => toggleSection(keyName)}
        className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3 hover:text-gray-700 transition-colors bg-[#E9EFF4] p-[10px_15px] rounded-[4px] border border-[#D7E3EB]"
      >
        <span className="text-[16px]">{title}</span>
        {expandedSections[keyName] ? (
          <ChevronDown className="w-6 h-6 text-[#225376] " />
        ) : (
          <Minus className="w-6 h-6 text-[#225376] font-semibold" />
        )}
      </button>

      {expandedSections[keyName] && (
        // <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
        <div className="space-y-3 max-h-48 pl-[15px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-gray-50 scrollbar-track-gray-50 ">
          {Object.entries(items || {}).map(([value, count]) => (
            <label
              key={value}
              className="flex items-start gap-3 text-sm cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={filters[category]?.includes(value) || false}
                onChange={() => handleFilterToggle(category, value)}
                className="mt-0.5 rounded accent-[#B17F3D] scale-110 border-gray-300 text-[#B17F3D] focus:ring-[#B17F3D] focus:ring-offset-0"
              />
              <span className="text-gray-700 group-hover:text-gray-900 flex-1 leading-tight">
                {value}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  const mockTimePeriods = {
    "2000-2003": 12,
  };

  const mockDataTypes = {
    CSV: 45,
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-[#225376]">FILTERS</h2>
        <button
          onClick={resetFilters}
          className="text-sm text-[#B17F3D] font-medium transition-colors"
        >
          RESET
        </button>
      </div>

      <FilterSection
        title={`Sectors (${Object.keys(aggregations.sectors || {}).length})`}
        keyName="sectors"
        items={aggregations.sectors}
        category="sectors"
      />
      <FilterSection
        title={`Time Period (${Object.keys(mockTimePeriods).length || 0})`}
        keyName="timePeriods"
        items={mockTimePeriods}
        category="timePeriods"
      />
      <FilterSection
        title={`Data Type (${Object.keys(mockDataTypes).length || 0})`}
        keyName="dataTypes"
        items={mockDataTypes}
        category="formats"
      />
      <FilterSection
        title={`Tags (${Object.keys(aggregations?.tags || {}).length})`}
        keyName="tags"
        items={aggregations?.tags || {}}
        category="tags"
      />

      <FilterSection
        title={`Licenses (${aggregations.licenses?.length || 0})`}
        keyName="licenses"
        items={aggregations.licenses}
        category="licenses"
      />
      <FilterSection
        title={`Geographies (${aggregations.geographies?.length || 0})`}
        keyName="geographies"
        items={aggregations.geographies}
        category="geographies"
      />
    </div>
  );
}
