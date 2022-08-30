export function ArrowButton() {
  const goToTop = () => {
    document.body.scrollIntoView();
  };
  return (
    <div>
      <button
        onClick={goToTop}
        type="button"
        className="text-white bg-orange-600 hover:bg-orange-700  font-medium rounded-full text-sm p-2.5 text-center flex m-6 fixed bottom-6 right-0"
      >
        <svg
          aria-hidden="true"
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Icon description</span>
      </button>
    </div>
  );
}
