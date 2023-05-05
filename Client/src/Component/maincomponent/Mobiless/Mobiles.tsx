import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FilterSideBar from './FilterSideBar';
import MobileList from './List';
import { getAllMobileList } from '../../../Config/Service/mobileService';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));
const FilterContainer = styled(Box)({
  height: "100vh",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "0.3em"
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888"
  }
});

export default function Moblie() {
  React.useEffect(() => {
    getListOfAllMobile()
  }, [])
  const getListOfAllMobile = async () => {
    const res = await getAllMobileList();
    console.log("response", res)
  }

  return (

    <Box sx={{ flexGrow: 1, bgcolor: "#f1f2f6", height: '100vh', }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={3} >
          <FilterContainer>
            <FilterSideBar />
          </FilterContainer>
        </Grid>
        <Grid item xs={12} md={9}>
          <FilterContainer>
            {
              Array.from([1, 2, 3, 4, 5, 6, , 7, 8, 9, 10]).map((item, index) => (
                <Item key={index + 1}><MobileList /></Item>
              ))
            }
          </FilterContainer>
        </Grid>
      </Grid>
    </Box>

  );
}
