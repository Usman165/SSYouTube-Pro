type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export default function Input({
  placeholder,
  value,
  onChange,
  className = "",
}: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-5 py-4 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-400 outline-none focus:border-red-500 transition ${className}`}
    />
  );
}