import React from 'react';
import { useTranslation } from 'react-i18next';
import { DropDownMenuItem } from '../../@types/types';

type InnerMenuProps = { items: DropDownMenuItem[] };

const InnerMenu: React.FC<InnerMenuProps> = ({ items }) => {
  const { t } = useTranslation();

  return (
    <ul className='menu'>
      {items.map((item) => (
        <li id={item.id}>
          <a href={item.href}>{item.label && t(item.label)}</a>
        </li>
      ))}
    </ul>
  );
};

export default InnerMenu;
