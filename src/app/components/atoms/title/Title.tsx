import TitleProps from "./types";

export default function Title ({title}:TitleProps) {
    return(
        <h1 className="text-5xl font-bold text-red-800 drop-shadow-md my-16">
            {title}
        </h1>
    )
}
