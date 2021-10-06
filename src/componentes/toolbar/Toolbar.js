import React, { useState } from 'react';
import './Toolbar.css'
// import logo from '../../assets/filmflix.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';


const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="toolbar" light expand="md" justify-content-end>
                <NavbarBrand className="logotipo" href="/">videTv</NavbarBrand>
                <NavbarToggler className="hamburguer" onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav className="mt-auto" navbar >
                        <NavItem>
                            <NavLink href="">Cadastrar</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Listar</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}


export default Example;