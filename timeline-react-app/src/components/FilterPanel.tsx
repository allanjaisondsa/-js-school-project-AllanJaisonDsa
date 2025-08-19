import { useState } from "react";

interface Props {
  categories: string[];
  onFilter: (category: string | null) => void;
}

export default function FilterPanel({ categories, onFilter }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "all" ? null : e.target.value;
    setSelected(value);
    onFilter(value);
  };

  return (
    <div className="filter-panel">
      <label htmlFor="category">Filter by Category: </label>
      <select id="category" value={selected || "all"} onChange={handleChange}>
        <option value="all">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}
