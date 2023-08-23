import CardBannerProps from './types';

export default function CardBanner({ size, children }: CardBannerProps) {
  return (
    <div
      className={`${size} flex items-center justify-center overflow-hidden rounded shadow-2xl outline outline-offset-1 outline-neutral-500/10`}
    >
      {children}
    </div>
  );
}
