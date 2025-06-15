interface CategoryFilterProps {
  categories: string[];
  value: string;
  onChange: (value: string) => void;
}

const CategoryFilter = ({ categories, value, onChange }: CategoryFilterProps) => (
<select
    value={value}
    onChange={e => onChange(e.target.value)}
    className="border px-2 py-1 rounded bg-white text-black"
>
    {categories.map(cat => (
        <option key={cat} value={cat} className="bg-gray-100 text-black">
            {cat}
        </option>
    ))}
</select>
);

export default CategoryFilter;