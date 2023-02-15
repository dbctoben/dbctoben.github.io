import React from 'react';
import { useTranslation } from 'react-i18next';
import { DropDownMenuProps } from '../../consts/types';
import InnerMenu from './InnerMenu';

const DropDownMenu: React.FC<DropDownMenuProps> = ({ items }) => {
  const { t } = useTranslation();

  return (
    <ul className='dropdown menu' data-dropdown-menu>
      {items.map((item) => (
        <li>
          <a href={item.href} id={`${item.id}`}>
            {item.label && t(item.label)}
          </a>
          {item.subItems && <InnerMenu items={item.subItems}></InnerMenu>}
        </li>
      ))}
    </ul>
  );
};

export default DropDownMenu;
