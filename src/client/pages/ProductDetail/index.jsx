import React, {useEffect} from "react";
import "./ProductDetail.css";
import { useState } from "react";
import {Button, Divider, Form, Input, Rate} from 'antd'
import {AiOutlineShoppingCart} from "react-icons/ai";
import "antd/dist/antd.css"
import * as CurrencyFormat from 'react-currency-format';
import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
    const [value, setvalue] = useState(0)
    const prouctId = useParams();

    //lấy data product từ backend
    useEffect(() => {
        setTimeout(async () => {
            await axios.get("")
        }, 1000)
    })


    var CurrencyFormat = require('react-currency-format');
    const [loading,setloading] = useState(false)
    const onButtonClick = (e) => {
        console.log('Button clicked')
        setloading(true)
        setTimeout(() => {
            setloading(false)

        }, 2000);
    }

    return (
        <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid" id="product_image">
                <img src="http://phutungkubota.vn/Uploads/20976f702965e13bb874-1.jpg" alt="sdf" height="500" width="500" />
            </div>
            <div className="col-12 col-lg-5 mt-5">
                <h2>
                    HỘP CẦU CHÌ MÁY GẶT MÁY KÉO
                </h2>
                <div className="rating-outer">
                    <div className="rating-inner"></div>
                </div>
                <Rate defaultValue={4} allowHalf count={5}/>

                <span id="no_of_reviews">(5 reviews)</span>
                <hr />
                <p>Write powerful product descriptions quickly with this easy to follow template and fill in the blank options to ensure you convert visitors into customers.</p>
                <Divider style={{borderColor:"black"}}/>
                <CurrencyFormat value={10000} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                <div className="flex VrhRS0">
                    <label className="_34CHXV">Deal Sốc</label>
                    <div className="_3-CbwQ">Mua để nhận quà</div>
                </div>
                <div className="stockCounter d-inline">
                    <Form.Item
                        required
                        rules={[{
                            validator(ruler,cardItem) {
                                return new Promise((resolve, reject) => {
                                    if (cardItem >= 0) {
                                        resolve()
                                    } else {
                                        reject("Not found")
                                    }
                                })
                            }
                        }]}
                        >
                        {/* <Carditem/> */}
                </ Form.Item>
                </div>
                {/* <CartContext.Consumer>
                    {({addToCart}) =>(
                        <Button
                        loading={loading}
                        icon={<AiOutlineShoppingCart/>}
                        class="btn btn-tinted btn--l vQ3lCI _8ULUF3"
                        onClick={()=>addToCart(ProductDetail)}
                    >Thêm vào giỏ hàng</Button>
                    )}
               >Thêm vào giỏ hàng</Button>
            </CartContext.Consumer> */}
            </div>
            {/*<Divider style={{borderColor:"red"}}/>*/}
            <Divider style={{borderColor:"black"}}/>


        </div>

    )
}
export default ProductDetail;