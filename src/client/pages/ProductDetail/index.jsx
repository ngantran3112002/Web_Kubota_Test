
import React from "react";
import "./ProductDetail.css";
import { useState } from "react";
import {Button, Divider, Form, Input, Rate, List, Avatar} from 'antd'
import {AiOutlineShoppingCart} from "react-icons/ai";
import "antd/dist/antd.css"
import * as CurrencyFormat from 'react-currency-format';
import {CartContext } from '../Cart'
const ProductDetail = () => {
    const [value, setvalue] = useState(0)
    function Carditem({value, onChange}) {
        return (
            <>
            <Button onClick={()=>{onChange(value-1)}}>-</Button>
            <span>{value}</span>
            <Button onClick={()=>{onChange(value+1)}}>+</Button>
        </>
        )
    }
    var CurrencyFormat = require('react-currency-format');
    const [loading,setloading] = useState(false)
    const onButtonClick = (e) => {
        console.log('Button clicked')
        setloading(true)
        setTimeout(() => {
            setloading(false)

        }, 2000);
    }
    const data = [
        {
            title: 'Ant Design Title 1',
            description:' Sản phẩm chất lượng, chính hãng, giá tốt! Shop xử lý đơn và giao hàng nhanh! Sẽ tiếp tục ủng hộ Shop ở những đơn hàng sau!!!ihwrfureihgpqqqqqqqqqqqqqqqqqqqqqqqqsssssssssdcndsjunfcwdnfcifwnfc'
        },
        {
            title: 'Ant Design Title 2',
            description:' Hàng chính hãng. Đóng gói kỹ càng. Chất lượng tốt. Mua sale nên rẻ hơn bên ngoài khá nhiều. Giao hàng tận nhà nên đỡ công đi lại...i chdddddddddddddddd hfiq3jfiehrcu2e nwih uhfiu2griehruhfu3rfuhergyfgrgurftuewhf724y rciryurh utuewgut83ugfy45turhfur3gurg73rgfuyrgfuwgf87hf'
        },
        {
            title: 'Ant Design Title 3',
            description: 'Giao hành nhanh chất lượng tốt đáng mua'
        },
        {
            title: 'Ant Design Title 4',
            description:'hihihihihi'
        },
    ];

    return (

        <div className="row f-flex justify-content-around" style={{display:"flex", left:"20px"}}>
            <div className="col-12 col-lg-5 img-fluid" id="product_image">
                <img src="http://phutungkubota.vn/Uploads/20976f702965e13bb874-1.jpg" alt="sdf" height="500" width="500" style={{position:"relative", left:"150px", top:"20px"}} />
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
                <CurrencyFormat style = {{fontSize: "30px", color:"red"}} value={10000} displayType={'text'} thousandSeparator={true} prefix={'đ '} />

                <div className="flex VrhRS0" style={{display:"flex"}}>
                    <label className="_34CHXV">Deal Sốc</label>
                    <div className="_3-CbwQ">Mua để nhận quà</div>
                </div>

                <div className="flex tprdAj pN+gd-"style={{display:"flex",marginBottom:"20px"}}>
                    <label className="c27oHv">Vận chuyển</label>
                    <div className="FpxUz+ TKcfnJ">
                        <div className="qUe3y7">
                            <div className="C-UCH-" style={{marginLeft:"40px"}}>
                                <img
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/1cdd37339544d858f4d0ade5723cd477.png"
                                width="25" height="15" className="k0LUJt"/>Miễn phí vận chuyển
                            </div>
                        </div>
                </div>
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
                        <Carditem/>
                </ Form.Item>
                </div>
            {/*    <CartContext.Consumer>*/}
            {/*        {({addToCart}) =>(*/}
            {/*            <Button*/}
            {/*            loading={loading}*/}
            {/*            icon={<AiOutlineShoppingCart/>}*/}
            {/*            class="btn btn-tinted btn--l vQ3lCI _8ULUF3"*/}
            {/*            onClick={()=>addToCart(ProductDetail)}*/}
            {/*        >Thêm vào giỏ hàng</Button>*/}
            {/*        )}*/}
                <Button
                   loading={loading}
                   icon={<AiOutlineShoppingCart/>}
                   class="btn btn-tinted btn--l vQ3lCI _8ULUF3"
                   onClick={onButtonClick}
                   style={{paddingLeft:"20px",paddingRight:"20px",width:"217px",height:"46px", color:"red", backgroundColor:"rgba(208,1,27,0.08)", borderColor:"red"}}
               >Thêm vào giỏ hàng</Button>
            {/*</CartContext.Consumer>*/}
            </div>
            {/*<Divider style={{borderColor:"red"}}/>*/}
            <Divider style={{borderColor:"gray"}}/>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={item.title}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />


        </div>

    )
}
export default ProductDetail;