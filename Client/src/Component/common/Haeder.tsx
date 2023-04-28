import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import mobileImg from '../../../src/asset/imeges/download.jpeg';
import { routeLink } from '../../Router/RouteList';

const CustomAppBar = styled(AppBar)({
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 20px',
  minHeight: '20px'
});

type CustomButtonProps = {
  component?: React.ElementType;
  to: string;
};

const CustomButton = styled(Button)<CustomButtonProps>(
  {
    color: '#000000',
    gap: '4px',
    display: 'flex',
    flexDirection: 'column', // set flex direction to column
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 10px',
    minHeight: '30px'
  },
  ({ component }) =>
    component === Link && {
      textDecoration: 'none',
    }
);

function Header() {
  return (
    <CustomAppBar position="static">
      <Toolbar sx={{ justifyContent: 'center', width: '100%' }}>
      {routeLink.map((link:any,ind:any)=>(
        <CustomButton color="inherit" component={Link} to={link?.link} sx={{ width: '10%',pt:'5px' }}>
        <img src={mobileImg} alt="Home" style={{ minHeight: '50%', width: '40%' }} />
        <span>{link.name}</span>
      </CustomButton>
      ))}
      </Toolbar>
    </CustomAppBar>
  );
}

export default Header;
