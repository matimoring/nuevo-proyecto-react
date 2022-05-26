import CardItem from '../Card/Card'
import {Grid} from '@mui/material';
import { useState, useEffect } from 'react';



const CardList = ({title, products })=> {

    return (
        <>
        {console.log("state products: ", products )}
        <Grid container spacing={5}>
            {
                products.map(({title, price, image, id}) => {
                    return(
                        <Grid item md={4} key={id}>
                            <CardItem title={title} price={price} image={image} />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>
    );
}

export default CardList;
        {/*<Grid container>
                <Grid item md={3}>
                    <CardItem title={"Café Colombia fuerte"} price={305} image={"cafe-fuerte.png"}/>
                </Grid>
        </Grid>
        <Grid container>
                <Grid item md={3}>
                    <CardItem title={"Café Camboya fuerte"} price={805} image={"cafe1.png"}/>
                </Grid>
        </Grid>
        <Grid container>
                <Grid item md={3}>
                    <CardItem title={"Café Idonesia fuerte"} price={945} image={"cafe2.png"}/>
                </Grid>
        </Grid>
        <Grid container>
                <Grid item md={3}>
                    <CardItem title={"Café Brasil fuerte"} price={390} image={"cafe3.png"}/>
                </Grid>
        </Grid>
        <Grid container>
                <Grid item md={3}>
                    <CardItem title={"Café Brasil medio"} price={370} image={"cafe-medio.png"}/>
                </Grid>
        </Grid>
        <Grid container>
                <Grid item md={3}>
                    <CardItem title={"Café Nicaragua suave"} price={440} image={"cafe-suave.png"}/>
                </Grid>
        </Grid>
        <Grid container>
                <Grid item md={3}>
                    <CardItem title={"Café Brasil extra suave"} price={455} image={"cafe-extrasuave.png"}/>
                </Grid>
        </Grid>
        <Grid container>
                <Grid item md={2}>
                    <CardItem title={"Café Indonesia suave"} price={900} image={"cafe5.png"}/>
                </Grid>
        </Grid>
        <Grid container>
                <Grid item md={2}>
                    <CardItem title={"Café Colombia extra suave"} price={444} image={"cafe4.png"}/>
                </Grid>
        </Grid>
        */}