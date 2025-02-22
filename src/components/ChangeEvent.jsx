import { useState } from "react"

const ChangeEvent=() => {
   const [name,setName] =useState("Guest")
   const [quantity,setQuantity] =useState(1)
   const [comment,setComment] =useState("")
   const [payment,setPayment] =useState("")
   const [shipping,setShipping] =useState("Delivery")
    
    // const handleChange=(e)=>setName(e.target.value)
    function handleChange(e) {
        setName(e.target.value)
    }
    function handleQuantityChange(e) {
        setQuantity(e.target.value)
    }
    function handleCommentChange(e) {
        setComment(e.target.value)
    }
    function handlePaymentChange(e) {
        setPayment(e.target.value)
    }
    function handleShippingChange(e) {
        setShipping(e.target.value)
    }
    return (
        <div>
            {/* <input type="text" value={name}
            onChange={(e) => handleChange(e)} />
            <p>Name:{name}</p> */}
            <input type="text" value={name}
            onChange={handleChange} />
            <p>Name:{name}</p>

            <input type="number" value={quantity}
            onChange={handleQuantityChange} />
            <p>Quantity:{quantity}</p>

            <textarea
                value={comment}
                placeholder="Enter comments..."
                onChange={handleCommentChange}
            />
            <p>Comment:{comment}</p>
            
            <select value={payment} onChange={handlePaymentChange}>
               <option value="">Select an option</option>
               <option value="MasterCard">MasterCard</option>
               <option value="GiftCard">GiftCard</option>
               <option value="Visa">Visa</option>
            </select>
            <p>Payment:{payment}</p>
            
            <label>
                <input type="radio"
                    value="Pick Up"
                    checked={shipping === "Pick Up"}
                onChange={handleShippingChange}/>
                Pick Up
            </label><br/>
            <label>
                <input type="radio"
                    value="Delivery"
                    checked={shipping === "Delivery"}
                onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping:{shipping}</p>
        </div>
    )


}

export default ChangeEvent
