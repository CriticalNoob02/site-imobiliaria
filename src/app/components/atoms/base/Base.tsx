import BaseProps from './types';

/**
 * Componente com tamanho da tela e display flex;
 */
export default function Base({ children }: BaseProps) {
    return (
        <div className=" h-auto min-h-screen w-screen flex-col items-center">
            {children}
        </div>
    );
}
