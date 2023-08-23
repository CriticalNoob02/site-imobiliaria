import CardBannerProps from './types'

export default function CardBanner({ size, children }: CardBannerProps) {
    return (
        <div
            className={`${size} overflow-hidden flex items-center justify-center shadow-2xl rounded outline outline-offset-1 outline-neutral-500/10`}
        >
            {children}
        </div>
    )
}
