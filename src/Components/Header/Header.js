import React, { Component } from 'react'
import "./Header.css";

const dataLinks = [
    {
        id: 1,
        name: "Features",
        link: "#"
    },
    {
        id: 2,
        name: "Enterprise",
        link: "#"
    },
    {
        id: 3,
        name: "Support",
        link: "#"
    },
    {
        id: 4,
        name: "Pricing",
        link: "#"
    },
]


export default class Header extends Component {
    render() {
        return (
            <nav className="navbar container-fluid border-bottom border-1 pe-5">
                <h4 className='navbar-brand ms-4 mt-2 fw-normal text-dark'>Company name</h4>
                <div className='d-flex justify-between-around'>
                    <ul className='nav me-auto'>
                        {
                            dataLinks.map((value, index) => {
                                return <li class="nav-item">
                                    <a class="nav-link text-dark fs-5" aria-current="page" href={value.link}>{value.name}</a>
                                </li>
                            })
                        }

                    </ul>
                    <a class="btn btn-outline-primary">Sign up</a>
                </div>
            </nav>
        )
    }
}
