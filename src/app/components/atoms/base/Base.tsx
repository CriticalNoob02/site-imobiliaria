import BaseProps from './types';

export default function Base({ children }: BaseProps) {
    return (
        <div className=" h-auto min-h-screen w-screen flex-col items-center">
            {children}
        </div>
    );
}
