import RowProps from "./types";

export default function Row ({
  children,
  width = 'w-screen',
  height = 'h-screen',
  color = "bg-slate-50"
}:RowProps) {
  return(
    <div className={`${width} ${height} ${color} flex justify-center items-center flex-row`}>
      {children}
    </div>
  )
}
