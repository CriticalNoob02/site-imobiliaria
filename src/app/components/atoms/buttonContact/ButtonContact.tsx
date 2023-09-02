import ButtonContactProps from './types';

/**
 * Componente generico de botão;
 * @param children Componente interno;
 * @param color Cor do botão (Inserir apenas o nome da cor);
 * @example
 * bg-lime-500 => color='lime'
 */
export default function ButtonContact({
    children,
    color
}: ButtonContactProps) {
    // Use a interpolação de classes do Tailwind CSS
    const bgColor = `bg-${color}-600`;
    const hoverBgColor = `hover:bg-${color}-500`;
    const hoverShadowColor = `hover:shadow-${color}-600/50`;

    return (
        <div className="px-8">
            <button className={`flex select-none items-center justify-center rounded ${bgColor} p-3 transition hover:-translate-y-0.5 ${hoverBgColor} ${hoverShadowColor}`}>
                {children}
            </button>
        </div>
    );
}
