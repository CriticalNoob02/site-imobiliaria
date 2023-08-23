import ColProps from "./types";

export default function Col ({
  children,
  id,
  width = 'w-screen',
  height = 'h-screen',
  color = "bg-slate-100",
}:ColProps) {
  return(
    <div id={id ?? ''} className={`${width} ${height} ${color} flex justify-center items-center flex-col text-center`}>
      {children}
    </div>
  )
}
