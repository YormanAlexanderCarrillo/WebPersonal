import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';

const NavBar = () => {
    return (
        <div className='flex w-full justify-end pr-10'>
            <div>
                <Navbar className='sticky'>
                    <NavbarContent className='sm:flex gap-4 justify-center'>
                        <NavbarItem>
                            <Link as={NavLink} color='foreground' to="/">Inicio</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button 
                                color='primary' 
                                variant="bordered" 
                                as="a" 
                                href="CV_YORMAN_ALEXANDER_CARRILLO_MARTINEZ.pdf" 
                                target="_blank" 
                                download="CV_YORMAN_ALEXANDER_CARRILLO_MARTINEZ.pdf">
                                Descargar CV
                            </Button>
                        </NavbarItem>
                        <NavbarItem>
                            <Button as={NavLink} color='danger' variant="bordered" to="/contact">Contacto</Button>
                        </NavbarItem>
                        
                    </NavbarContent>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;
