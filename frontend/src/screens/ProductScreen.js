import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { detailsProduct } from '../actions/productActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import Rating from '../components/Rating'
// import data from '../data'

const ProductScreen = ({match}) => {
  const dispatch=useDispatch()
  const productId=parseInt(match.params.id)
  // const product=data.products.find(product=>product._id===parseInt(match.params.id))
  const productDetails=useSelector(state=>state.productDetails)
  const {loading,error,product}=productDetails
  // console.log(match.params)
  // if(!product){
  //   return(
  //     <div>Product Not Found</div>
  //   )
  // }
  useEffect(()=>{
    dispatch(detailsProduct(productId))
  },[dispatch,productId])
  return (
    <div>
      {
        loading ? <LoadingBox /> :
        error ? <MessageBox variant="danger">{error}</MessageBox>:
        <div>
        <Link to="/">Back to result</Link>
        <div className="row top">
            <div className='col-2'>
              <img className='large' src={product.image} alt={product.name}/>
            </div>
            <div className='col-1'>
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li><Rating rating={product.rating} nbReviews={product.numReviews}/></li>
                <li>{product.price}</li>
                <li>Description :
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className='col-1'>
              <div className='card card-body'>
                <ul>
                  <li>
                    <div className='row'>
                      <div>Price</div>
                      <div className='price'>${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className='row'>
                      <div>Status</div>
                      <div>
                        {
                          product.countInStock > 0 
                          ? (<span className='success'>In Stock</span>)
                          : (<span className='danger'>Unavailable</span>)
                        }
                      </div>
                    </div>
                  </li>
                  <li>
                    {product.countInStock > 0 && (<button className='primary block'>Add to Cart</button>)}
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      }
    </div>
    
  )
}

export default ProductScreen
