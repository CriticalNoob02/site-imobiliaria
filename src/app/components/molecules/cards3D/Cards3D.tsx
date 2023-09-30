import Cards3DProps from "./types";
import { Card3d, IconContainer } from "../../atoms";
import { createElement } from 'react';

export default function Cards3D ({
    titles,
    links,
    icons,
}:Cards3DProps) {
    return(
        <div className="w-full h-full flex items-center justify-around">
            {titles.map((title, i) => (
                <Card3d
                    key={title}
                    color="bg-red-800"
                >
                    <a className="cursor-pointer" rel="preload" href={`${links[i]}`}>
                        <div className="relative flex h-full w-full flex-col items-center rounded transition">
                            <IconContainer hover='group-hover:scale-110 group-hover:drop-shadow-lg'>
                                {createElement(icons[i])}
                            </IconContainer>
                            <h1 className="z-20 m-4 select-none text-2xl font-semibold tracking-wide text-slate-50 drop-shadow-md transition">
                                {title}
                            </h1>
                        </div>
                    </a>
                </Card3d>
            ))}
        </div>

    )
}
