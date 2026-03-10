type ButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  className?: string
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
  const base = "px-5 py-3 min-h-10 rounded font-bold bg-[#f9004d] hover:bg-red-700 text-white"

  return (
    <button
      type="button"
      className={`${base} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
