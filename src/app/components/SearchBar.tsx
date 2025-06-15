import Link from 'next/link';
interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => (
    <div className="relative w-full">
        <input
            type="text"
            placeholder="Buscar por nombre..."
            value={value}
            onChange={e => onChange(e.target.value)}
            className="border px-2 py-1 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        
<div className="mt-2 ml-2">
    <Link href="/dashboard">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Ir al Dashboard
        </button>
    </Link>
    
</div>
    </div>
);

export default SearchBar;