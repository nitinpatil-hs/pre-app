import MenuItem from "./MenuItem";

const Cart = () => {
    return <>
    <section className="max-w-md mx-auto">
        <h1>Cart</h1>
        <ul>
            <MenuItem item={{name:'Biryani', quantity:2}} />
            <MenuItem item={{name:'Paratha', quantity:4}} />
            <MenuItem item={{name:'Tandoor', quantity:1}} />
        </ul>
    </section>
    </>
}

export default Cart;