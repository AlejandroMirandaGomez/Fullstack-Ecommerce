import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";

import formatPrice from "../../util/FormatPrice";
import Label from "./Label";

function ProductFilters({
  min = 0,
  max = 20000,
  defaultRange = [min, max],
  defaultStatus = { inStock: false, onSale: false },
  onChangeFilters,
  onApply,
  subCategories = [],
  defaultSubcategories = {}, // opcional: { [url]: true/false }
  className = "",
}) {
  const [range, setRange] = useState(defaultRange);
  const [status, setStatus] = useState(defaultStatus);
  const [selectedSubcategories, setSelectedSubcategories] =
    useState(defaultSubcategories);
  
  useEffect(() => {
    setSelectedSubcategories(defaultSubcategories);
  }, [defaultSubcategories]);


  const handleRangeChange = (_, newValue) => {
    setRange(newValue);

    onChangeFilters?.({
      priceMin: newValue[0],
      priceMax: newValue[1],
      status,
      subcategories: selectedSubcategories,
    });
  };

  const handleStatusChange = (key) => {
    const updated = { ...status, [key]: !status[key] };
    setStatus(updated);

    onChangeFilters?.({
      priceMin: range[0],
      priceMax: range[1],
      status: updated,
      subcategories: selectedSubcategories,
    });
  };

  const handleSubcategoryToggle = (key) => {
    const updated = {
      ...selectedSubcategories,
      [key]: !selectedSubcategories[key],
    };
    setSelectedSubcategories(updated);

    onChangeFilters?.({
      priceMin: range[0],
      priceMax: range[1],
      status,
      subcategories: updated,
    });
  };

  const applyFilters = () => {
    onApply?.({
      priceMin: range[0],
      priceMax: range[1],
      status,
      subcategories: selectedSubcategories,
    });
  };

  return (
    <section
      className={
        "shadow-xl w-full h-full lg:w-92 bg-white border border-neutral-200 p-5 space-y-8 lg:bg-transparent lg:shadow-none " +
        className
      }
    >
      {/* FILTRO POR PRECIO */}
      <div>
        <h2 className="text-xs font-semibold tracking-[0.16em] uppercase text-neutral-500">
          Filter by price
        </h2>

        <div className="mt-4 space-y-4">
          <Slider
            value={range}
            onChange={handleRangeChange}
            min={min}
            max={max}
            valueLabelDisplay="auto"
            sx={{ color: "#111" }}
          />

          <div className="flex items-center justify-between text-sm text-neutral-700">
            <span>
              ₡{formatPrice(range[0])} — ₡{formatPrice(range[1])}
            </span>

            <button
              type="button"
              onClick={applyFilters}
              className="
                inline-flex items-center px-3 py-1.5
                text-xs font-semibold uppercase tracking-wide
                border border-neutral-900 rounded-full
                hover:bg-neutral-900 hover:text-white
                transition-all cursor-pointer
              "
            >
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* FILTRO POR ESTADO */}
      <div>
        <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-neutral-500 mb-3">
          Product status
        </h3>

        <div className="space-y-2 text-sm text-neutral-800">
          <Label
            inputProps={{
              checked: status.inStock,
              onChange: () => handleStatusChange("inStock"),
            }}
          >
            In stock
          </Label>

          <Label
            inputProps={{
              checked: status.onSale,
              onChange: () => handleStatusChange("onSale"),
            }}
          >
            On sale
          </Label>
        </div>
      </div>

      {/* FILTRO POR SUBCATEGORIA */}
      {Array.isArray(subCategories) && subCategories.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-neutral-500 mb-3">
            Subcategories
          </h3>

          <div className="space-y-2 text-sm text-neutral-800">
            {subCategories.map((sub) => {
              const key = sub.url; // key estable
              const isChecked = !!selectedSubcategories[key];

              return (
                <Label
                  key={key}
                  inputProps={{
                    checked: isChecked,
                    onChange: () => handleSubcategoryToggle(key),
                  }}
                >
                  {sub.name}
                </Label>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductFilters;
