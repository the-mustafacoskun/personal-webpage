// src/components/icons/Rect.jsx

export const Rect = ({ className }) => {
  return (
    <svg
      viewBox="0 0 124 59" // Orijinal viewBox değerin
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width="217"
        height="59"
        rx="29.5" // Köşe yuvarlaklığı
        fill="currentColor" // Renk kontrolünü Tailwind'e verdik
      />
    </svg>
  );
};