import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link';
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";

const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between", margin:"0 6rem", padding:"1rem 1rem"}} className='flex justify-between mx-40 py-4 bg-transparent'>
        <div><p>Mayank</p></div>
        <div style={{width:"35%"}}>
        <label className={styles.labeln}>
<input className={styles.inputn} type="checkbox"/>
<span className={styles.menu}> <span class={styles.hamburger}></span> </span>
<ul className={styles.navitem}>
  <li> <Link href="/">Home</Link> </li>
  <li> <Link href="/">About</Link> </li>
  <li><Link href="/">Blogs</Link></li>
  <li> <Link href="/">Contact</Link> </li>
</ul>
</label>
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