
export const Circle = ({ className }) => {
  return (
    <svg
      viewBox="0 0 111 66" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="55.5"
        cy="10.5"
        r="55.5"
        fill="currentColor" // Renk kontrolünü Tailwind'e verdik
      />
    </svg>
  );
};