import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <h1>El Mejor Taco Truck</h1>
            <Link to ='/'>Home</Link>
            <Link to ='/tacos'>Tacos</Link>
            <Link to ='/orders'>Orders</Link>
        </div>
    )
}