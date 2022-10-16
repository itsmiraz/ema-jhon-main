import React from 'react';
import './ReviewOrder.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewOrder = ({ product, handleClick }) => {

    const { name, price, quantity, img, id } = product;
    return (
        <div className='review-order'>
            <img src={img} alt="" />
            <div className="details-container">
                <div className="details">
                    <h3>
                        {name}
                    </h3>
                    <p>Price:${price}</p>
                    <p>Quantity:{quantity}</p>
                </div>
                <div>
                    <button onClick={() => handleClick(id)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-font' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder;