import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import mobileImg from './img/pocomobile.png'
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    padding: 0,
    borderRadius: 0,
    "& img": {
        width: "50%",
        height: "auto",

    },
}));

const MobileName = styled("h2")(({ theme }) => ({
    color: "#000",
    fontWeight: 700,
    fontSize: theme.typography.pxToRem(20),
    marginBottom: 0,
    textAlign: 'start',

}));
const MobilePrice = styled("p")(({ theme }) => ({
    textAlign: 'start',
}));
const MobilePercent = styled("span")(({ theme }) => ({
    textAlign: 'start',
    color: 'green',
    fontWeight: 1000,

}));

const Rating = styled("p")(({ theme }) => ({
    color: "#808080",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    "& span": {
        display: "block",
        marginRight: theme.spacing(1),
        backgroundColor:'green',
        color: "#FFF",
        paddingRight: theme.spacing(0.5),
        paddingLeft: theme.spacing(1),
        borderRadius:"5px"
    },
    "& svg": {
        fill: "#FFC107",
        marginRight: theme.spacing(0.5),
    },
}));

const FeatureList = styled("ul")(({ theme }) => ({
    listStyle: "none",
    margin: 0,
    padding: 0,
}));

const FeatureItem = styled("li")(({ theme }) => ({
    color: "#808080",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    "& ul li": {
        fontWeight: 700,
        marginRight: theme.spacing(2),
        textAlign: 'start'

    },
}));
type CustomButtonProps = {
    component?: React.ElementType;
    to: string;
};
export default function MobileList() {
    return (
        <>
            <Link to={''} style={{ textDecoration: 'none', }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Box >
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3}>
                                <Item>
                                    <img src={mobileImg} alt="mobile" />
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Item>
                                    <MobileName>Mobile Name With (color and ram)</MobileName>
                                    <Rating>
                                        <span>4.3*
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 16.3l-5.83 3.54 1.69-6.18L3.56 9.16l6.22-.54L12 3l2.22 5.62 6.22.54-4.3 3.53 1.69 6.18L12 16.3z" />
                                        </svg>
                                        </span>
                                        <span>200 Rating &amp; 199 Reviews</span>
                                    </Rating>
                                    <FeatureList>
                                        <FeatureItem>
                                            <ul>
                                                <li> <span>Ram</span> | <span>Rom</span> | <span>Upto</span> |</li>
                                                <li> <span>screen size</span></li>
                                                <li> <span>secondry camera </span>| <span>primary camera</span></li>
                                                <li> <span> Battery capacity </span></li>
                                                <li> <span> waranty </span></li>
                                            </ul>
                                        </FeatureItem>
                                    </FeatureList>
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Item>
                                    <MobileName>Price</MobileName>
                                    <MobilePrice>
                                        <span style={{ paddingRight: '10px' }}>og price</span>
                                        <MobilePercent>{'30'}% off</MobilePercent>
                                    </MobilePrice>
                                    <MobilePrice>Free Delivery</MobilePrice>
                                    <MobilePrice><MobilePercent>Top Discount on sale </MobilePercent></MobilePrice>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Link>

        </>

    );

}
