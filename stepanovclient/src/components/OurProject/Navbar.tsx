import { FC, useState } from 'react';

interface INavbarProjectProps {
    value: number;
    onClickCategory: (index: number) => void;
}

const NavbarProject: FC<INavbarProjectProps> = ({ value, onClickCategory }) => {
    const categories = ['Bathroom', 'Bedroom', 'Kitchen', 'LivingArea'];

    return (
        <nav className="our-project-menu">
            <ul className="our-project-menu-items our-project-menu__our-project-menu-items">
                {categories.map((categoryName, i) => (
                    <li
                        key={i}
                        onClick={() => onClickCategory(i)}
                        className={`our-project-menu-item our-project-menu__our-project-menu-item ${
                            value === i ? 'our-project-menu-item__active' : ''
                        }`}
                    >
                        <p className="content__desc our-project-menu__content-desc content__desc__largeDesc">
                            {categoryName}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavbarProject;
