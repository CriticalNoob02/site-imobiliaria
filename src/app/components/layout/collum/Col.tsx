import ColProps from "./types";

export default function Col ({
  children,
  width = 'w-screen',
  height = 'h-screen',
  color = "bg-slate-50"
}:ColProps) {
  return(
    <div className={`${width} ${height} ${color} flex justify-center items-center flex-col`}>
      {children}
    </div>
  )
}
