import { useState } from "react";
import { Search } from "lucide-react";

import { brands } from "../data/brands";
import { mobileModels, MobileModel } from "../data/mobileModels";

export default function MobileFeatures() {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<MobileModel | null>(null);

  // Filter models based on selected brand + search query
  const filteredModels = mobileModels.filter(
    (m) =>
      m.brand === selectedBrand &&
      m.model.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gray-50 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Mobile Features</h1>
          <p className="mt-3 text-gray-600">
            Select your mobile brand and search for your model to view full specifications.
          </p>
        </div>

        {/* Brand Selection */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-center mb-6">
            Select Mobile Brand
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            {brands.map((brand) => (
              <button
                key={brand.name}
                onClick={() => {
                  setSelectedBrand(brand.name);
                  setQuery("");
                  setSelectedModel(null);
                }}
                className={`flex flex-col items-center justify-center gap-2 p-4 min-h-[120px]
                  rounded-xl border bg-white transition
                  ${
                    selectedBrand === brand.name
                      ? "border-blue-600 ring-2 ring-blue-200"
                      : "border-gray-200 hover:border-blue-400"
                  }`}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 md:h-14 w-auto object-contain"
                  loading="lazy"
                />
                <span className="text-sm font-medium text-gray-700">
                  {brand.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Model Search */}
        {selectedBrand && (
          <div className="max-w-xl mx-auto mb-10 relative">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${selectedBrand} model`}
              className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedModel(null);
              }}
            />
          </div>
        )}

        {/* Model List */}
        {!selectedModel && selectedBrand && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModels.map((model, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow hover:shadow-md cursor-pointer"
                onClick={() => setSelectedModel(model)}
              >
                <h3 className="text-xl font-semibold">
                  {model.brand} {model.model}
                </h3>
                <p className="text-sm text-gray-500">
                  Launched in {model.year}
                </p>
                <p className="mt-2 text-blue-600 text-sm font-medium">
                  View Details →
                </p>
              </div>
            ))}

            {filteredModels.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                No models found for this brand.
              </p>
            )}
          </div>
        )}

        {/* Model Details */}
        {selectedModel && (
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              {selectedModel.brand} {selectedModel.model}
            </h2>

            <ul className="space-y-2 text-gray-700">
              <li><b>Year:</b> {selectedModel.year}</li>
              <li><b>Display:</b> {selectedModel.display}</li>
              <li><b>Battery:</b> {selectedModel.battery}</li>
              <li><b>Camera:</b> {selectedModel.camera}</li>
              <li><b>Processor:</b> {selectedModel.processor}</li>
              <li><b>Approx Price:</b> {selectedModel.price}</li>
            </ul>

            <button
              className="mt-6 text-blue-600 font-medium"
              onClick={() => setSelectedModel(null)}
            >
              ← Back to models
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
