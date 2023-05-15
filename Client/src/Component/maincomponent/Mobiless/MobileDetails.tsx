import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import mobileImg from './img/pocomobile.png'
import { makeStyles } from "@mui/styles";
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import * as action from './Reduxx/MobileAction';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';




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
    margin: 0,
    textAlign: 'start',

}));
const MobilePrice = styled("p")(({ theme }) => ({
    textAlign: 'start',
    margin: 0
}));
const MobilePercent = styled("span")(({ theme }) => ({
    textAlign: 'start',
    color: 'green',
    fontWeight: 1000,
    margin: 0

}));

const Rating = styled("p")(({ theme }) => ({
    color: "#808080",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    // marginBottom: theme.spacing(2),
    "& span": {
        display: "block",
        marginRight: theme.spacing(1),
        backgroundColor: '#388e3c',
        color: "#FFF",
        paddingRight: theme.spacing(0.5),
        paddingLeft: theme.spacing(1),
        borderRadius: "5px"
    },
    "& svg": {
        fill: "#FFC107",
        marginRight: theme.spacing(0.5),
    },
    "& p": {
        fontWeight: 900,
        margin: 0
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
    listStyleType: "circle",
    // marginBottom: theme.spacing(1),
    "& ul li": {
        fontWeight: 900,
        marginRight: theme.spacing(2),
        textAlign: 'start'

    },
    "& span": {
        paddingRight: '5px',
        paddingLeft: '5px',
        fontWeight: 900,
    }
}));
type CustomButtonProps = {
    component?: React.ElementType;
    to: string;
};
export default function MobileDetails({ data }: any) {
    const [mobileData, setMobileData] = useState<any>([])
    const dispatch = useDispatch();
    const mobileId = useParams()
    const [postalCode, setPostalCode] = useState('');
    const handlePostalCodeChange = (event: any) => {
        setPostalCode(event.target.value);
    };
    React.useEffect(() => {
        dispatch(action.getMobileDetailsRequest(mobileId?.id, getMobileDetails));
    }, [])
    const getMobileDetails = async (callbackdata: any) => {
        try {
            console.log("callbackdata", callbackdata);

            setMobileData(callbackdata?.payload)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Box >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Item>
                                <MobileName>{mobileData?.title?.toUpperCase()} {" "} ({" "} {mobileData?.features?.ram + " | " + mobileData?.features?.rom}{" "} )
                                </MobileName>
                                <Rating>
                                    <span>{mobileData?.ratings?.overallRating}*
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 16.3l-5.83 3.54 1.69-6.18L3.56 9.16l6.22-.54L12 3l2.22 5.62 6.22.54-4.3 3.53 1.69 6.18L12 16.3z" />
                                        </svg>
                                    </span>
                                    <p>{mobileData?.ratings?.totalRatings} Rating &amp; {mobileData?.ratings?.totalReviews}  Reviews</p>
                                </Rating>
                                <MobilePrice>
                                    <MobilePercent>
                                        <span>Extra</span>
                                        <span> <i className="fa fa-inr"></i>1200 off</span>
                                    </MobilePercent>
                                </MobilePrice>
                                <MobileName> <span> <i className="fa fa-inr"></i> {" "}{mobileData?.price}</span></MobileName>

                                <FeatureList>
                                    <FeatureItem> <span>{mobileData?.features?.ram}</span> | <span>{mobileData?.features?.rom}</span> | <span>Upto</span> | </FeatureItem>
                                    <FeatureItem> <span>{mobileData?.features?.screenSize}</span> </FeatureItem>
                                    <FeatureItem> <span>{mobileData?.features?.secondaryCamera}</span>| <span>{mobileData?.features?.primaryCamera}</span> </FeatureItem>
                                    <FeatureItem> <span> {mobileData?.features?.batteryCapacity}</span> </FeatureItem>
                                    <FeatureItem> <span> {mobileData?.features?.warranty}</span> </FeatureItem>
                                </FeatureList>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <FeatureList>
                                <Box display="flex" alignItems="center" gap={1} sx={{ marginBottom: "14px" }}>
                                    <img width={18} src={"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"} alt="Bank Offer" />
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        <strong>Bank Offer</strong>: Flat ₹1250 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹15,000 and above.
                                        <Typography variant="body2" color="textSecondary" component="span" >
                                            <Link to={''} style={{ textDecoration: 'none', }}>T&C.</Link>
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1} sx={{ marginBottom: "14px" }}>
                                    <img width={18} src={"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"} alt="Bank Offer" />
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        <strong>Bank Offer</strong>: Flat ₹1250 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹15,000 and above.
                                        <Typography variant="body2" color="textSecondary" component="span">
                                            <Link to={''} style={{ textDecoration: 'none', }}>T&C.</Link>
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1} sx={{ marginBottom: "14px" }}>
                                    <img width={18} src={"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"} alt="Bank Offer" />
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        <strong>Bank Offer</strong>: Flat ₹1250 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹15,000 and above.
                                        <Typography variant="body2" color="textSecondary" component="span">
                                            <Link to={''} style={{ textDecoration: 'none', }}>T&C.</Link>
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1} sx={{ marginBottom: "14px" }}>
                                    <img width={18} src={"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"} alt="Bank Offer" />
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        <strong>Bank Offer</strong>: Flat ₹1250 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹15,000 and above.
                                        <Typography variant="body2" color="textSecondary" component="span">
                                            <Link to={''} style={{ textDecoration: 'none', }}>T&C.</Link>
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1} sx={{ marginBottom: "14px" }}>
                                    <img width={18} src={"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"} alt="Bank Offer" />
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        <strong>Bank Offer</strong>: Flat ₹1250 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹15,000 and above.
                                        <Typography variant="body2" color="textSecondary" component="span">
                                            <Link to={''} style={{ textDecoration: 'none', }}>T&C.</Link>
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1} sx={{ marginBottom: "14px" }}>
                                    <img width={18} src={"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"} alt="Bank Offer" />
                                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                                        <strong>Bank Offer</strong>: Flat ₹1250 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹15,000 and above.
                                        <Typography variant="body2" color="textSecondary" component="span">
                                            <Link to={''} style={{ textDecoration: 'none', }}>T&C.</Link>
                                        </Typography>
                                    </Typography>
                                </Box>
                            </FeatureList>
                        </Grid>
                        <Grid container xs={12} md={4} >
                            <FeatureList>
                                <FeatureItem>
                                    <Box display="flex" alignItems="center" gap={1} sx={{ marginBottom: "14px" }}>
                                        <Typography variant="body1" sx={{ fontSize: "14px", margin: "16px" }}>
                                            Delivery
                                        </Typography>
                                        <span style={{color:'blue'}}>
                                            
                                                <i style={{color:'blue'}} className="fa-solid fa-location-dot"></i>
                                            </span>
                                        <div className="input-container">
                                        
                                            <input
                                                value={postalCode}
                                                type="number"
                                                onChange={handlePostalCodeChange}
                                                className={postalCode ? 'input-field with-value' : 'input-field'}
                                            />
                                           
                                        </div>
                                    </Box>
                                </FeatureItem>
                            </FeatureList>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </>

    );

}
