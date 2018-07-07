import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {Link} from 'react-router-dom';

@observer class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    logMeOut(){
        localStorage.clear();
        window.location = '/login'
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Link to={'/'} className="v-center">
                        <img height={20}
                             src={this.props.profile.avatarUrl ? this.props.profile.avatarUrl : "https://placehold.it/30/30"}
                             alt=""/>{this.props.profile.name}
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="cursor-pointer" onClick={this.logMeOut}>Logout</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;