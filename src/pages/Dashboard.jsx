import React, { useState }  from 'react'
import products from '../data'
import Card from '../components/Card.jsx'

const Dashboard = () => {
    const [productCard, setproductCard] = useState(products);
    return (
        <>
        <div className='d-flex gap-2 flex-wrap p-3'>
            {productCard.map((product,index)=>(
                <div className=' badge bg-warning p-2 ' key={index}>{product.category}</div>
            ))}
        </div>


            <div className="container">
                <div className='row'>
                    {productCard.map((product, index) => (

                        <div className='col col-md-6 col-lg-3' key={index}>
                            <Card product={product} />
                        </div>
                    ))}

                </div>
            </div>
            </>
            );
        
};

export default Dashboard