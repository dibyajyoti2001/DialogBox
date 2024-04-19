export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-evenly mt-4">
      <div className="flex">
        <button
          className={`border-2 border-gray-800 bg-white text-gray-800 rounded-l-md px-3 py-1 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            className={`border border-gray-800 bg-white text-gray-800 px-3 py-1`}
            style={{
              backgroundColor: currentPage === page + 1 ? "#EF4444" : "white",
              color: currentPage === page + 1 ? "white" : "#4B5563",
            }}
            onClick={() => onPageChange(page + 1)}
          >
            {page + 1}
          </button>
        ))}
        <button
          className={`border-l border-t-2 border-b-2 border-r-2 border-gray-800 bg-white text-gray-800 rounded-r-md px-3 py-1 ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
      <div className="text-gray-800 flex items-center">
        <span>Rows per page</span>
        <select className="mx-2 border-2 border-gray-800 rounded px-2 py-1">
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
    </div>
  );
}
