import React from "react";
import "./ProductDetail.css";
import  {useState} from "react";

const ProductDetail = () => {
    const [cardItem, setcardItem] = useState(0)
    const handleIncrease = () => {
        setcardItem(cardItem+1)
    }
    const Increase = () => {
        setcardItem(cardItem-1)
    }
    return (
        <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid" id="product_image">
                <img src="http://phutungkubota.vn/Uploads/20976f702965e13bb874-1.jpg" alt="sdf" height="500" width="500"/>
            </div>
            <div className="col-12 col-lg-5 mt-5">
                <h3>
                    HỘP CẦU CHÌ MÁY GẶT MÁY KÉO
                </h3>
                <div className="rating-outer">
                    <div className="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 reviews)</span>
                <hr/>
                <p id="product_price">10000000</p>
                <div className="stockCounter d-inline">
                    <span className="btn bg-danger minus" onClick={Increase}>-</span>
                    <input type="number" className="form-control count d-inline" value={cardItem}   />
                    <span className="btn btn-primary plus" onClick={handleIncrease}>+</span>

                </div>
                <button  type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Them gio hang</button>
            </div>

        </div>
    )
}
export default ProductDetail