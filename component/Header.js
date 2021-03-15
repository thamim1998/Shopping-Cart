import Link from 'next/link'

const Header = (props) => {
    return (
        
        <header className="row block center" >
            <div>
                <h1>  Small Shopping Cart  </h1> 
            </div>
            <div>
                <Link href = "/cart" >Cart</Link> <Link href = "/signin" >  SignIn</Link>
                
            </div>
        </header>
       
       
    )
}

export default Header;