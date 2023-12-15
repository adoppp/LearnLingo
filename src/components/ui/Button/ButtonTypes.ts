import { MouseEvent, CSSProperties } from 'react';

type ButtonTypeTypes = 'submit' | 'button' | 'reset';

export type ButtonTypes = {
    customContainerStyles?: CSSProperties,
    gray?: boolean,
    type?: ButtonTypeTypes,
    label?: string,
    dark?: boolean,
    action?: (event: MouseEvent<HTMLButtonElement>) => void,
};