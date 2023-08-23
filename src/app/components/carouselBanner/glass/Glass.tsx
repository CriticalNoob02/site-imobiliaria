import GlassProps from './types'

export default function Glass({ children }: GlassProps) {
    return (
        <div className="backdrop-blur-sm bg-white-200/20 w-full h-full flex items-center justify-center">
            {children}
        </div>
    )
}
