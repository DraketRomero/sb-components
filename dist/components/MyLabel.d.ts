/// <reference types="react" />
import "./myLabel.css";
export interface MyLabelProps {
    /**
     * Texto que tendra el label
     */
    label: string;
    /**
     * Este es el tamanio del texto de la etiqueta
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Si quiere las letras mayusculas o minusculas
     */
    allCaps?: boolean;
    /**
     * Colores basicos del boton
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Colore personalizado de la fuente
     */
    fontColor?: string;
    /**
     * Colore personalizado de la fuente
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
