/* eslint-disable */
import React from 'react';
import { Menubar } from 'primereact/menubar';
import './Navbar.css'
        


function Navbar(){

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            
            
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];



    return(
        <div style={{height:'1400px'}} >
        <div className="navbar" >
            <Menubar model={items} />
        </div>
        </div>
    )






}



export default Navbar