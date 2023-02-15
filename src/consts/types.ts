export type Id = {
  id: string;
}

export type Link = {
  label: string;
  href: string;
};

export type LinkItem = Link & Id;

export type NavBarSubCategory = LinkItem & {
  fields: Array<LinkItem>;
};

export type NavBarCategory = LinkItem & {
  subCategories: NavBarSubCategory[];
};

export type NavBarProps = {
  categories: NavBarCategory[];
};

export type DropDownMenuItem = LinkItem & {
  hasDivider?: boolean;
  subItems?: DropDownMenuItem[];
};

export type DropDownMenuProps = { items: Array<DropDownMenuItem> };

export type ImageButtonProps = {
  href: string;
  className: string;
  src: string;
  alt?: string;
  imageWidth: string;
  imageHeight: string;
};

export type LoginButtonProps = {
  anchorElUser: HTMLElement | null;
  settings: Array<string>;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
};

export type AppLogoButtonProps = {
  minified?: boolean;
}
