import GlassProps from './types';

export default function Glass({ children }: GlassProps) {
    return (
        <div className="bg-white-200/20 flex h-full w-full items-center justify-center backdrop-blur-sm">
            {children}
        </div>
    );
}
