const Magnifier: React.FC<{ className?: string }> = ({ className }) => (
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
      d="M11 3a8 8 0 1 1-5.29 14.04l-3.61 3.61a1 1 0 0 1-1.42-1.42l3.61-3.61A8 8 0 0 1 11 3Zm0 2a6 6 0 1 0 4.24 10.24 1 1 0 0 1 .07-.07A6 6 0 0 0 11 5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Magnifier;
