import React from 'react';
import { Container,Box,Rating } from '@mui/material';

const ProductView = ({data}) => {
    console.log("d",data);

    return (
        <>
            { data ? (<Container>
                    <Container style={{ width:'40%', backgroundColor: 'whitesmoke', borderRadius: '10px'}}>
                        <img src={data.image}  alt={data.title} style={{width: '100%', height: '80%'}}/>
                    </Container>
                    <Container style={{ textAlign: 'left', width:'60%'}}>
                        <h4 style={{color: '#6941c6'}}>{data.category}</h4>
                        
                        <h3>{data.title.length > 30 ?  data.title.substr(0, 30) : data.title }</h3>

                        <p>{data.description.length > 30 ?  data.description.substr(0, 30) : data.description }</p>
                        {/* //<p>{data.rating.rate}   {data.rating.count}</p> */}
                        <Box display="flex" alignItems="center">
        <Rating
          name="customized-rating"
          value={data.rating.rate}
          precision={0.5}
          readOnly
        />
        <Box ml={1}>{data.rating.count}</Box>
      </Box>
                        <h4>$ {data.price}</h4>
                    </Container>
                </Container>
            ) : (<>
                <Container style={{ textAlign: 'center'}}>
                    <h4 style={{color: '#6941c6'}}>Nothing to display</h4>
                    
                    <h2>Select an item to display</h2>

                    <p>Select an item from the master view to display details in the details view.</p>
                </Container>
            </>)}
        </>
    );
}

export default ProductView;