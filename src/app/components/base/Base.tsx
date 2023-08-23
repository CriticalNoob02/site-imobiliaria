import BaseProps from './types/BaseProps'

export default function Base({ children }: BaseProps) {
    return (
        <div className=" w-screen min-h-screen h-auto flex-col items-center">
            {children}
        </div>
    )
}
