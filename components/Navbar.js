import React from 'react'
import styles from '../styles/navbar.module.css'
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";

const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between", margin:"0 6rem", padding:"1rem 1rem"}} className='flex justify-between mx-40 py-4 bg-transparent'>
        <div><p>Mayank</p></div>
        <div style={{width:"35%"}}>
            <ul style={{display:"flex", justifyContent:"space-between", listStyle:"none"}}>
                <li className={styles.navitem}>Home</li>
                <li className={styles.navitem}>About</li>
                <li className={styles.navitem}>Blogs</li>
                <li className={styles.navitem}>Contact</li>
            </ul>
        </div>
        <div>
  <input type="checkbox" className={styles.checkbox} id="checkbox"/>
  <label for="checkbox" className={styles.checkboxlabel}>
    <IoMoon style={{color:"#f1c40f"}}/>
    <FaSun style={{color:"#f39c12"}}/>
    <span className={styles.ball}></span>
  </label>
</div>
    </div>
  )
}

export default Navbar