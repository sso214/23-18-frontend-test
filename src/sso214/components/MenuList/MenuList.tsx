import { useCallback } from 'react';
import { List } from '../List';
import { Heading } from '../Heading';
import { Menu } from '../Menu';
import { MenuInfo } from '../Menu/types';
import S from './style.module.css';

interface Props {
  title: string;
  menus: MenuInfo[];
}

const MenuList = ({ title, menus }: Props) => {
  const renderItem = useCallback(
    ({ item }: { item: MenuInfo }) => <Menu data-testid="item" menu={item} />,
    [],
  );
  const keyExtractor = useCallback((item: MenuInfo) => item.name, []);

  return (
    <>
      <Heading headingLevel="h2" className={S.title} data-testid="title">
        {title}
      </Heading>

      <List<MenuInfo>
        containerTag="ul"
        data={menus}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data-testid="list"
      />
    </>
  );
};

export default MenuList;
