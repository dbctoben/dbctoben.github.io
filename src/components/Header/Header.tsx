import React, { useEffect, useState } from 'react';
import { LinkProps } from 'react-router-dom';
import { mockCategoriesUrl } from '../../consts/consts';
import fetchData from '../../services/fetchData';
import { Category } from '../../@types/types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Button, Icon, ThemeProvider } from '@mui/material';
import AppLogoButton from '../AppLogoButton/AppLogoButton';
import LoginButton from '../LoginButton/LoginButton';
import SearchInput from '../SearchInput/SearchInput';
import Categories from '../Categories/Categories';
import { noTextTransformButton } from '../../services/themes';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTranslation } from 'react-i18next';
import keys from '../../i18n/keys';
import LanguageButton from '../LanguageButton/LanguageButton';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

type HeaderProps = {
  links: Array<LinkProps & { label: string }>;
};

const Header: React.FC<HeaderProps> = () => {
  useEffect(() => {
    fetchData(mockCategoriesUrl).then((data) => {
      if (data.categories) {
        setCategories(data.categories);
      }
    });
  }, []);

  const [categories, setCategories] = useState([] as Array<Category>);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElCategories, setAnchorElCategories] = useState<null | HTMLElement>(null);

  const { t } = useTranslation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenCategories = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCategories(event.currentTarget);
  };
  const handleCloseCategories = () => {
    setAnchorElNav(null);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar color='transparent' position='static'>
      <ThemeProvider theme={noTextTransformButton}>
        <Container maxWidth={false}>
          <Toolbar disableGutters sx={{ height: 80 }}>
            {/* Displays on large screen */}
            <Icon sx={{ display: { xs: 'none', md: 'flex' }, width: 'auto', height: 'auto' }}>
              <AppLogoButton />
            </Icon>
            {/* <div id='portal-ref-dummy' ref={headerRef}></div> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, height: '100%' }}>
              <SearchInput />
              <Categories
                categories={categories}
                anchorElCategories={anchorElCategories}
                handleOpenCategories={handleOpenCategories}
                handleCloseCategories={handleCloseCategories}
              />
              <Box sx={{ flexDirection: 'row', display: 'flex', justifyContent: 'end', flexGrow: 1 }}>
                <Box sx={{ display: 'flex', mr: '40px' }}>
                  <Button>{t(keys.createACourse)}</Button>
                </Box>
                <IconButton sx={{ alignSelf: 'center', mr: '20px' }}>
                  <ShoppingCartIcon />
                </IconButton>
                <LoginButton
                  anchorElUser={anchorElUser}
                  settings={settings}
                  handleOpenUserMenu={handleOpenUserMenu}
                  handleCloseUserMenu={handleCloseUserMenu}
                />
                <LanguageButton />
              </Box>
            </Box>
            {/* ------------------------- */}

            {/* Displays on small screen */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
              <Icon
                sx={{
                  alignSelf: 'center',
                  display: { xs: 'flex', md: 'none' },
                  width: 'auto',
                  height: 'auto',
                }}
              >
                <AppLogoButton minified={true} />
              </Icon>
              <Box sx={{ flexGrow: 1 }}>
                <SearchInput />
              </Box>
              <Box sx={{ alignSelf: 'flex-end' }}>
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
            </Box>
            {/* ------------------------- */}
          </Toolbar>
        </Container>
      </ThemeProvider>
    </AppBar>
  );
};

export default Header;
