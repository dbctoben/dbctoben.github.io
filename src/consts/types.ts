export type Id = {
  id: string;
};

export type Link = {
  label: string;
  href: string;
};

export type LinkItem = Link & Id;

export type DropDownMenuItem = LinkItem & {
  hasDivider?: boolean;
  subItems?: DropDownMenuItem[];
};

export type DropDownMenuProps = {
  menuTitle: string;
  items?: Array<DropDownMenuItem>;
  anchorEl: HTMLElement | null;
  handleOpenMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseMenu: () => void;
};

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
};

export type Category = LinkItem & {
  subCategories: Array<LinkItem>;
};
