import React from 'react';
import { Container } from '@mui/material';
import './product-item.css';

const ProductItem = ({data, onSelect}) => {

    return (
                <Container className='productItem' style={{display: 'inline-flex'}} onClick={() => onSelect(data)}>
                {/* <Image
                    src={`${data.image}`}
                    alt={data.title}
                    loading="lazy"
                /> */}
                    <Container style={{ width:'40%', backgroundColor: 'whitesmoke', borderRadius: '10px'}}>
                        <img src={data.image}  alt={data.title} style={{width: '100%', height: '80%'}}/>
                    </Container>
                    <Container style={{ textAlign: 'left', width:'60%'}}>
                        <h4 style={{color: '#6941c6'}}>{data.category}</h4>
                        
                        <h3>{data.title.length > 30 ?  data.title.substr(0, 30) : data.title }</h3>

                        <p>{data.description.length > 30 ?  data.description.substr(0, 30) : data.description }</p>
                        <h4>$ {data.price}</h4>
                    </Container>
                </Container>
    );
}

export default ProductItem;