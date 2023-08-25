import IconContainerProps from './types';

export default function IconContainer({ children, size }: IconContainerProps) {
    return(
        <div className={`grow ${size ?? 'text-[10rem]'} text-slate-50 transition group-hover:scale-110 group-hover:drop-shadow-lg flex justify-center items-center`}>
            {children}
        </div>
    )
}
