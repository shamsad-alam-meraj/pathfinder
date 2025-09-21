"use client";

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function FilterButton({ active, onClick, children }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border font-semibold transition-all ${
        active
          ? "bg-blue-700 text-white border-blue-700 shadow-lg"
          : "text-blue-700 border hover:bg-blue-100"
      }`}
    >
      {children}
    </button>
  );
}
