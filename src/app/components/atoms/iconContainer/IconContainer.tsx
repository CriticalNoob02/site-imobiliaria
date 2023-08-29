import IconContainerProps from './types';

export default function IconContainer({ children, size, hover }: IconContainerProps) {
    return(
        <div className={`grow ${size ?? 'text-[10rem]'} ${hover ?? ''} text-slate-50 transition flex justify-center items-center`}>
            {children}
        </div>
    )
}
