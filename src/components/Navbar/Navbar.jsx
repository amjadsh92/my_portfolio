/* eslint-disable */
import { Menubar } from 'primereact/menubar';
import './Navbar.scss'
        


function Navbar(){

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'About',
            icon: 'pi pi-user'
        },
        {
            label: 'Projects',
            icon: 'pi pi-folder',
        },
         {
            label: 'Game',
            icon: 'pi pi-box'
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];



    return(
        
        <div className="navbar" >
            <Menubar model={items} />
        </div>
        
    )






}



export default Navbar