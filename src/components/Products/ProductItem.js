import React  from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { addToCart , getProduct , decreaseProductModal} from '../../store/CartSlice'
import { Link , NavLink} from 'react-router-dom';
import'./style.css';

export default function ProductItem() {
    const dispatch = useDispatch();
    const productState= useSelector((state) => state.productItems);
    
    const handelAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    const handelIncrease = (product) => {
        dispatch(addToCart(product))
    }

    const handelDecrease = (product) => {
        dispatch(decreaseProductModal(product))
    }

    const handelProduct = (product) => {
        dispatch(getProduct(product))
    }


    const productItem = productState.productItems.map((product) => {
        return(
            <div className='row modal-body' key = {product.id}>
                    <div className='modal-img col-12 col-lg'>
                        <img className='img-fluid' src={product.img_source} alt={product.alt_name}/>
                    </div>
                    <div className='modal-info col-12 col-lg'>
                        <h3 onClick={() => handelProduct(product)}>{product.title}</h3>
                        <h4>{`$ ${product.price}`}</h4>
                        <p>{product.body}</p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <button disabled = {product.cartQuantity === 0} onClick={() => handelDecrease(product)}>-</button>
                            <span>{product.cartQuantity}</span>
                            <button onClick={() => handelIncrease(product)}>+</button>
                            <button onClick={() => handelAddToCart(product)}>Add To Cart</button>
                        </form>
                        <div className='modal-icon'>
                            <Link to='/'><i className="fa-regular fa-heart"></i> Add To Wishlist </Link>
                            <Link to='/'><i className="fa-solid fa-code-compare"></i> Add To compare </Link>
                        </div>
                        <ul className='modal-social'>
                            <span>Share: </span>
                            <NavLink to='/'> <i className="fa-brands fa-facebook"></i> </NavLink>
                            <NavLink to='/'> <i className="fa-brands fa-twitter"></i> </NavLink>
                            <NavLink to='/'> <i className="fa-brands fa-linkedin"></i> </NavLink>
                        </ul>
                    </div>
                </div>
        )
    })

    return (
        <div className='product-item'>
            <div className='caption'>
                <h2>Product Item</h2>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to=''>Product Item</Link>
            </div>
            <div className='container'>
                {productItem}
                <div className='product-info'>
                    <ul>
                        <li>Description</li>
                        <li>Reviews</li>
                    </ul>
                    <p className='product-description'>
                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, 
                        so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, 
                        which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, 
                        when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, 
                        every pleasure is to be welcomed and every pain avoided.
                    </p>
                    <div className='product-review'>
                        <div className='insert-review'></div>
                        <div className='review-message'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
