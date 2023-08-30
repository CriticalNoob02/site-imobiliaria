import ArrowButtonProps from './types';
import { PiArrowCircleRightLight } from 'react-icons/pi';

/**
 * Icone de seta clicavel
 * @param color Usar cor de texto;
 * @param onClick Função de clique;
 * @param size User tamanho de fonte;
 */
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
