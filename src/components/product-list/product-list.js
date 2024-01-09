import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';
import ProductItem from '../product-item/product-item';
import ProductView from '../product-view/product-view';


const ProductList = () => {
    const [APIData, setAPIData] = useState([]);
    const [viewData, setViewData] = useState();

    useEffect(() => {
        debugger;
        axios.get(`https://fakestoreapi.com/products/`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);

    const getProductDetails = (e) => {
        axios.get(`https://fakestoreapi.com/products/${e.id}`)
            .then((response) => {
                setViewData(response.data);
            })
    }

    return (
        <Container style={{display: 'inline-flex'}}>
            <Container style={{width: '40%'}}>
            <Container style={{overflowY: 'scroll', maxHeight: '100vh'}}>
                {APIData.map((data) => {
                    return (
                    <>
                        <ProductItem data={data} onSelect={getProductDetails}/>
                    </>
                )})}
            </Container>
            </Container>
            <Container style={{width: '60%'}}>
                <ProductView data={viewData}/>
            </Container>
        </Container>
    );
}

export default ProductList;