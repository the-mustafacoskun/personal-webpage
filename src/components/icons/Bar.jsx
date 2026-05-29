

export const Bar = ({ className }) => {
  return (
    <svg
      width="100%" 
      height="100%"
      viewBox="0 0 148 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width="148"
        height="31"
        rx="4"
        fill="currentColor" // Tailwind üzerinden renk kontrolü sağlar
      />
    </svg>
  );
};