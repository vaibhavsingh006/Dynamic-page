import React, { useState, useEffect } from "react";
import { ChevronRight, ArrowUp, ArrowDown } from "lucide-react";
import Header from "./Header";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import ViewToggle from "./ViewToggle";
import DatasetGrid from "./DatasetGrid";
import DatasetList from "./DatasetList";
import Pagination from "./Pagination";
import LoadingSkeleton from "./LoadingSkeleton";
import { fetchDatasets } from "../../utils/FetchDataset";
import Footer from "./Footer";

export default function Page() {
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [totalCount, setTotalCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [sortOrder, setSortOrder] = useState("desc");
  const [aggregations, setAggregations] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [filters, setFilters] = useState({
    sectors: [],
    geographies: [],
    tags: [],
    formats: [],
    timePeriods: [],
    licenses: [],
  });

  async function loadData() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchDatasets({
        query: searchQuery,
        Geography: filters.geographies.join(","),
        sectors: filters.sectors.join(","),
        tags: filters.tags.join(","),
        formats: filters.formats.join(","),
        page: currentPage,
        size: pageSize,
        sort: sortBy,
        order: sortOrder,
      });

      setDatasets(response.results || []);
      setTotalCount(response.total || 0);
      setAggregations(response.aggregations || {});
    } catch (err) {
      setError("Failed to load datasets. Please try again.");
      console.error("Error loading datasets:", err);
    } finally {
      setLoading(false);
    }
  }

  console.log(datasets);
  useEffect(() => {
    loadData();
  }, [searchQuery, filters, currentPage, pageSize, sortBy, sortOrder]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleSortChange = (sort, order) => {
    setSortBy(sort);
    setSortOrder(order);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-[#FDB557] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-sm flex items-center text-gray-700">
            <span className="hover:text-gray-900 font-semibold cursor-pointer">
              Home
            </span>
            <span className="mx-2 text-gray-800 font-semibold">{">"}</span>
            <span className="text-gray-900 font-medium">All Data</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6 flex flex-col items-start sm:items-center sm:flex-row gap-4">
          <SearchBar
            onSearch={(newQuery) => {
              setSearchQuery(newQuery);
              setCurrentPage(1);
            }}
          />

          <div className="flex flex-col float-left sm:flex-row items-start sm:items-center justify-between mt-2 sm:mt-0 gap-4">
            <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-gray-600">
                  <ArrowUp className="w-6 h-7 text-[#1F5F8D]" />
                  <ArrowDown className="w-6 h-7 text-[#1F5F8D]" />
                </div>
                <select
                  value={`${sortBy}-${sortOrder}`}
                  onChange={(e) => {
                    const [sort, order] = e.target.value.split("-");
                    handleSortChange(sort, order);
                  }}
                  className="px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#1F5F8D] focus:border-[#1F5F8D]"
                >
                  <option value="recent-desc">Latest Updated</option>
                  <option value="title-asc">Title A-Z</option>
                  <option value="title-desc">Title Z-A</option>
                  <option value="downloads-desc">Most Downloaded</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden mb-4 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            {sidebarOpen ? "Hide Filters" : "Show Filters"}
          </button>

          <div
            className={`w-full lg:w-80 flex-shrink-0 ${
              sidebarOpen ? "block" : "hidden lg:block"
            }`}
          >
            <Filters
              filters={filters}
              aggregations={aggregations}
              onFilterChange={handleFilterChange}
            />
          </div>

          <div className="flex-1 min-w-0">
            {loading ? (
              <LoadingSkeleton viewMode={viewMode} />
            ) : error ? (
              <div className="text-center py-12 bg-white rounded-lg border">
                <p className="text-red-600 mb-4">{error}</p>
                <button
                  onClick={loadData}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : datasets.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg border">
                <p className="text-gray-600">
                  No datasets found matching your criteria.
                </p>
              </div>
            ) : (
              <>
                {viewMode === "grid" ? (
                  <DatasetGrid datasets={datasets} />
                ) : (
                  <DatasetList datasets={datasets} />
                )}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  pageSize={pageSize}
                  totalCount={totalCount}
                  onPageChange={(page) => {
                    setCurrentPage(page);
                    console.log(page);
                  }}
                  onPageSizeChange={(size) => {
                    setPageSize(size);
                    setCurrentPage(1);
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
