const Basket = (props) => {
    const {cartItems, onAdd, onRemove} = props;
    const itemPrice = cartItems.reduce((a,c) => a+c.price * c.qty, 0)
  
    return (<aside className= "block col-1">
        <h2> Cart Items </h2>
        <div>
            {cartItems.length===0 && <div> Cart is Empty </div> }
            {cartItems.map((item)=> (
                <div key= {item.id} className="row" >
                    <div>{item.name}</div>
                    <div>
                        <button onClick= {()=>onAdd(item)} className= "add" > + </button>
                        <button onClick= {()=>onRemove(item)} className= "remove" > - </button>
                    </div>
                    <div className= "col-2 text-right" >
                        {item.qty} x Rs{item.price}
                    </div>
                </div> 
            ))}
        </div>
        {cartItems.length !== 0 && (
            <> 
            <hr></hr>
            <div className="row" >
                <div className="col-2" > <strong> Total Price </strong>  </div>
                <div className="col-1 text-right" > Rs {itemPrice} </div>
            </div>
           
           
         
            </>
        )}
    </aside>
    )
}

export default Basket;