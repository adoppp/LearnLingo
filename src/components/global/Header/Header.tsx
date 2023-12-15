import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cn = classNames.bind(styles);

const Header: FC = (): ReactElement => {
    return (
        <header className={cn('header')}>
            <div className={cn('header__container')}>
                <div>
                    <img src='' alt='' />
                    <span>LearnLingo</span>
                </div>

                <nav className={cn('header__navigation')}>
                    <ul>
                        <li>
                            <Link to='/'>
                                <span>
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <span>
                                    Teachers
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <span>
                                    Favorites
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className={cn('header__auth')}>
                    <button>
                        <span>
                            Log in
                        </span>
                    </button>
                    <Link to='/'>
                        <span>
                            Get started
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    )
};

export { Header };