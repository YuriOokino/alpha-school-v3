interface DividerProps {
  fill?: string;
  className?: string;
  direction?: "up" | "down";
}

export default function Divider({ fill = "white", className = "", direction = "down" }: DividerProps) {
  const path = direction === "down" 
    ? "M0 83H1440C1440 83 1003.04 0 720 0C436.96 0 0 83 0 83Z"
    : "M0 0H1440C1440 0 1003.04 83 720 83C436.96 83 0 0 0 0Z";

  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio: '1440/83' }}>
      <svg 
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 83" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d={path} fill={fill}/>
      </svg>
    </div>
  );
} 