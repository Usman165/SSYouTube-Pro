type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-red-600 hover:bg-red-700 transition-all duration-300 px-8 py-4 rounded-xl text-lg font-semibold text-white ${className}`}
    >
      {children}
    </button>
  );
}