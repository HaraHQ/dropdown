const ChevronDown: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="24"
    height="24"
  >
    <path
      fillRule="evenodd"
      d="M5.47 8.97a.75.75 0 0 1 1.06 0L12 14.44l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

export default ChevronDown;
