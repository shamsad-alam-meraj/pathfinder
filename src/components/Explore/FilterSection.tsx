"use client";

import FilterButton from "./FilterButton";
import { useTranslation } from "react-i18next";

interface FilterSectionProps {
  title: string;
  options: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterSection({
  title,
  options,
  activeFilter,
  onFilterChange,
}: FilterSectionProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <span className="font-semibold">{t(title)}:</span>
      <FilterButton
        active={activeFilter === "All"}
        onClick={() => onFilterChange("All")}
      >
        {t("all")}
      </FilterButton>
      {options.map((opt) => (
        <FilterButton
          key={opt}
          active={activeFilter === opt}
          onClick={() => onFilterChange(opt)}
        >
          {t(opt)}
        </FilterButton>
      ))}
    </div>
  );
}
