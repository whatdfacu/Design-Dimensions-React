import { FaCartPlus, FaDollarSign, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap'
import logo from '../assets/logo.png';
import { useDataContext } from '../Context/DataContext';
import { useCartContext } from '../Context/CartContext';

const Menu = () => {
    const { categories } = useDataContext()
    const { total, totalItems, orders } = useCartContext()

    return (
        <div className="pb-5">
            <Navbar bg="dark" variant="dark" expand="md">  
                    <Nav className="brand">
                        <Link to='/' className='navbar-brand'>
                            <img
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Design Dimensions Logo"
                            />
                    </Link>
                    </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown" className="mr-0 mr-md-2 mb-2 mb-md-0">
                            {categories && categories.length > 0 ? categories.map(
                                (v, i) => (
                                    <Link to={`/item/${v.id}`} className="dropdown-item" key={i}>
                                        {v.item.categoryId}
                                    </Link>
                                )
                            ) : 'No dropdown items found...'}
                        </NavDropdown>
                        <Link to="/orders" className="text-success text-decoration-none mr-0 mr-1">
                            <Button variant="outline-success mr-2" className="d-flex flex-fill w-100 w-md-auto mb-2 mb-md-0">
                                {orders && orders.length}
                            <FaShoppingBag className="ml-2" />
                            </Button>
                        </Link>
                        <Link to="/cart" className="text-success text-decoration-none mr-0 mr-1">
                            <Button variant="outline-success mr-2" className="d-flex flex-fill w-100 w-md-auto mb-2 mb-md-0">
                                {totalItems}
                                <FaCartPlus className="ml-2" />
                            </Button>
                        </Link>

                        <Button disabled variant="none mr-2" className="d-flex flex-fill text-white">
                            {total}
                            <FaDollarSign className="ml-2" />
                        </Button>
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Menu
