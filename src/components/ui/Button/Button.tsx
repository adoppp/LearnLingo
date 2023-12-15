import { FC, ReactElement } from 'react';
import { ButtonTypes } from './ButtonTypes';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cn = classNames.bind(styles);

const Button: FC<ButtonTypes> = ({
    customContainerStyles,
    gray,
    type,
    label,
    dark,
    action,
}): ReactElement => {
    return (
        <button
            style={
                customContainerStyles
                    ? customContainerStyles
                    : {}
            }
            className={cn('button', { gray: gray, dark: dark })}
            type={type ? type : 'button'}
            onClick={action ? action : undefined}
        >
            <span>
                {label}
            </span>
        </button>
    )
};

export { Button };