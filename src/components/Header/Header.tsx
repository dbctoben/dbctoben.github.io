import React, { useEffect, useRef, useState } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ImageButton from '../ImageButton/ImageButton';
import { brandImageSrc, mockCategoriesUrl } from '../../consts/consts';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import fetchData from '../../services/fetchData';
import { Category, DropDownMenuItem } from '../../consts/types';
import SearchBar from '../SearchInput/SearchInput';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Autocomplete, Icon, Popover, TextField } from '@mui/material';
import AppLogoButton from '../AppLogoButton/AppLogoButton';
import { AccountCircle } from '@mui/icons-material';
import LoginButton from '../LoginButton/LoginButton';
import { ThemeProvider } from '@mui/material/styles';
import { noTextTransformButton } from '../../services/themes';
import mockSearchData from '../../consts/mockSearchData';
import SearchInput from '../SearchInput/SearchInput';
import keys from '../../i18n/keys';
import CategoriesPopover from '../CategoriesPopover/CategoriesPopover';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

type HeaderProps = {
  links: Array<LinkProps & { label: string }>;
};

const Header: React.FC<HeaderProps> = ({ links }) => {
  useEffect(() => {
    fetchData(mockCategoriesUrl).then((data) => {
      console.log('DATA', data);
      if (data.categories) {
        setCategories(data.categories);
      }
    });
  }, []);

  const { t } = useTranslation();
  const [categories, setCategories] = useState([] as Array<Category>);
  const [isCategoryPopoverDisplayed, setIsCategoryPopoverDisplayed] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElCategories, setAnchorElCategories] = useState<null | HTMLElement>(null);
const [isInsideCategories, setIsInsideCategories] = useState(false);
  const appBarRef = useRef(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const displayCategories = (event: React.MouseEvent<HTMLElement>) => {
    setIsCategoryPopoverDisplayed(true);
    setAnchorElCategories(event.currentTarget);
  };
  const hideCategories = (force: boolean) => {
    if (force || )
    setIsCategoryPopoverDisplayed(false);
    setAnchorElCategories(null);
  };

  return (
    <AppBar color='transparent' position='static' ref={appBarRef}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ height: 80 }}>
          <Icon sx={{ display: { xs: 'none', md: 'flex' }, width: 'auto', height: 'auto' }}>
            <AppLogoButton />
          </Icon>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Icon
            sx={{
              flexGrow: 1,
              alignSelf: 'center',
              display: { xs: 'flex', md: 'none' },
              width: 'auto',
              height: 'auto',
            }}
          >
            <AppLogoButton minified={true} />
          </Icon>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, height: '100%' }} onMouseLeave={() => hideCategories(false)}>
            <Button onMouseEnter={displayCategories}>{t(keys.categories)}</Button>
            <Popover
              open={isCategoryPopoverDisplayed}
              anchorEl={anchorElCategories}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{ mt: '3px' }}
              disableRestoreFocus
              onMouseLeave={() => hideCategories(true)}
            >
              <CategoriesPopover categories={categories} />
            </Popover>

            {/* <DropDownMenu
              menuTitle={keys.categories}
              items={categories[0] ? categories[0].subItems : []}
              handleCloseMenu={handleCloseCategoriesMenu}
              handleOpenMenu={handleOpenCategoriesMenu}
              anchorEl={anchorElCategories}
            /> */}
            <SearchInput />
          </Box>

          <LoginButton
            anchorElUser={anchorElUser}
            settings={settings}
            handleOpenUserMenu={handleOpenUserMenu}
            handleCloseUserMenu={handleCloseUserMenu}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
