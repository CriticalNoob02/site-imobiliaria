import ArrowButtonProps from './types';
import { PiArrowCircleRightLight } from 'react-icons/pi';

export default function ArrowButton({
    color,
    onClick,
    size,
}: ArrowButtonProps) {
    return (
        <div
            className={`h-full w-full ${size} ${
                color ?? 'text-slate-100'
            } cursor-pointer select-none drop-shadow-lg`}
        >
            <PiArrowCircleRightLight
                onClick={onClick}
                className="transition delay-150 ease-in-out hover:scale-110"
            />
        </div>
    );
}
