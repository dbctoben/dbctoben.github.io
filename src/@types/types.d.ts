import React, { MutableRefObject } from 'react';

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
  className?: string;
  src: string;
  alt?: string;
  imageWidth: string;
  imageHeight: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export type LoginButtonProps = {
  anchorElUser: HTMLElement | null;
  settings: Array<string>;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
};

export type MenuButtonProps = {
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

export type CategoryPopoverProps = {
  categories: Array<Category>;
};

export type CategoriesProps = {
  categories: Array<Category>;
  anchorElCategories: HTMLElement | null;
  handleOpenCategories: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseCategories: () => void;
};

export enum COURSE_LEVEL {
  BEGINNER,
  MID,
  PRO,
  ALL,
}

export type SearchResultProps = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  author: string;
  rating: number;
  ratedBy: number;
  totalTime: number;
  numOfLectures: number;
  level: COURSE_LEVEL;
  numOfExcercises?: number;
  numOfTests?: number;
  authorizedCertificate?: boolean;
  price: number;
  salePrice?: number;
  currency: Currency;
};

export type Currency = 'NIS' | 'USD';

export type SearchResultsData = {
  results: Array<SearchResultProps>;
}