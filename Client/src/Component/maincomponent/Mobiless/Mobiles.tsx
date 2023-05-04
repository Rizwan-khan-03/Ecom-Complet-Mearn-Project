import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FilterSideBar from './FilterSideBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin:theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  
}));    

export default function Moblie() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={3}>
          <Item><FilterSideBar /></Item>
        </Grid>
        <Grid item xs={12} md={9}>
          <Item>xs=8 md=9</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
