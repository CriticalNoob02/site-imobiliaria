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
    return (
        <div className="px-8">
            <button className={`flex select-none items-center justify-center rounded bg-${color}-600 p-3 transition hover:-translate-y-0.5 hover:bg-${color}-500 hover:shadow-lg hover:shadow-${color}-600/50`}>
                {children}
            </button>
        </div>
    );
}
