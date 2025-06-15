interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    return (
        <div className="flex justify-center mt-6 gap-2">
            <button
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500"
            >
                Anterior
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    onClick={() => onPageChange(i + 1)}
                    className={`px-3 py-1 border rounded ${
                        currentPage === i + 1 ? "bg-green-500 text-white" : "bg-gray-200 text-black"
                    }`}
                >
                    {i + 1}
                </button>
            ))}
            <button
                onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500"
            >
                Siguiente
            </button>
        </div>
    );
}