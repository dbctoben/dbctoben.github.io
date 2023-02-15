import React, { useEffect, useState } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ImageButton from '../ImageButton/ImageButton';
import { brandImageSrc, mockCategoriesUrl } from '../../consts/consts';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import fetchData from '../../services/fetchData';
import { DropDownMenuItem } from '../../consts/types';
import SearchBar from '../Search/Search';

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
import { Icon } from '@mui/material';
import AppLogoButton from '../AppLogoButton/AppLogoButton';
import { AccountCircle } from '@mui/icons-material';
import LoginButton from '../LoginButton/LoginButton';
import { ThemeProvider } from '@mui/material/styles';
import { noTextTransformButton } from '../../services/themes';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

type HeaderProps = {
  links: Array<LinkProps & { label: string }>;
};

// const Header: React.FC<HeaderProps> = ({ links }) => {
//   return (
//     <div className='top-bar'>
//       <div className='top-bar-left'>
//         <ImageButton src={brandImageSrc} href='/' className='db-brand-image' imageHeight='50px' imageWidth='50px' />
//         <DropDownMenu items={categories} />
//         <SearchBar />
//       </div>

//       <div className='top-bar-right'></div>
//     </div>
//   );
// };

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [categories, setCategories] = useState([] as Array<DropDownMenuItem>);
  useEffect(() => {
    fetchData(mockCategoriesUrl).then((data) => {
      console.log('DATA', data);
      if (data.categories) {
        setCategories(data.categories);
      }
    });
  }, []);

  const { t } = useTranslation();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElCategories, setAnchorElCategories] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenCategories = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCategories(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseCategoriesMenu = () => {
    setAnchorElCategories(null);
  };

  return (
    <AppBar color='transparent' position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ height: 80}}>
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

          <Icon sx={{ flexGrow: 1, alignSelf: 'center', display: { xs: 'flex', md: 'none' }, width: 'auto', height: 'auto' }}>
            <AppLogoButton minified={true}/>
          </Icon>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <ThemeProvider theme={noTextTransformButton}>
              <Button
                id='db-categories-button'
                aria-controls={Boolean(anchorElCategories) ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={Boolean(anchorElCategories) ? 'true' : undefined}
                onClick={handleOpenCategories}
              >
                {t('categories')}
              </Button>
            </ThemeProvider>
            <Menu
              id='basic-menu'
              anchorEl={anchorElCategories}
              open={Boolean(anchorElCategories)}
              onClose={handleCloseCategoriesMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleCloseCategoriesMenu}>Profile</MenuItem>
              <MenuItem onClick={handleCloseCategoriesMenu}>My account</MenuItem>
              <MenuItem onClick={handleCloseCategoriesMenu}>Logout</MenuItem>
            </Menu>
            {/* {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))} */}
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
