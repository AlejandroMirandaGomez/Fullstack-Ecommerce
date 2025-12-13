function Label({ children, className = "", inputProps = {} }) {
  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-neutral-300 cursor-pointer"
        {...inputProps}
      />
      {children}
    </label>
  );
}

export default Label;
