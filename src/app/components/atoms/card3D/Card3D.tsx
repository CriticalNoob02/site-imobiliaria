import Card3dProps from './types';

/**
 * Card com movimento 3D
 * @param children Componente interno do Card;
 * @param color Cor de fundo do Card (utilizar cores de Background);
 * Tamanho do elemento deve ser definido no seu elemento pai;
 */
export default function Card3d({ children, color }: Card3dProps) {
    return (
        <div
            className={`card3D group h-3/5 w-1/5 ${color} rounded p-3 transition duration-300 hover:drop-shadow-xl`}
        >
            {children}
        </div>
    );
}
