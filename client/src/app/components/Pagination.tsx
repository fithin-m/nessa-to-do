export default function Pagination({ page, setPage, totalPages }: any) {
  return (
    <div className="pagination-container">
      <button
        className="btn-page"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>

      <span className="page-info">
        Page {page} of {totalPages}
      </span>

      <button
        className="btn-page"
        onClick={() => setPage(page + 1)}
        disabled={page >= totalPages}
      >
        Next
      </button>
    </div>
  );
}