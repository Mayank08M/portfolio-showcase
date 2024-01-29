import React from 'react'
// import { useState, useEffect } from 'react';
// import { useClient } from 'next/client';
import styles from '../styles/navbar.module.css'
import Link from 'next/link';
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa";

const Navbar = ({ onToggleTheme }) => {
  const handleThemeToggle = () => {
    onToggleTheme(); // Trigger the theme toggle function
  };

  // const isClient = useClient(); // Check if the component is running on the client side
  // const [check, setCheck] = useState(false);

  // useEffect(() => {
  //   if (isClient) {
  //     // This code will only run on the client-side
  //     setCheck(true);
  //   }
  // }, [isClient]); // Add isClient to the dependency array

  // const handleOnClick = () => {
  //   setCheck(!check);
  // };
  return (
    <div className={styles.maindiv}>
      <div><p>Mayank</p></div>
      <div style={{ width: "35%" }}>
        <label className={styles.labeln}>
          <input className={styles.inputn} type="checkbox" />
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
        <input onChange={handleThemeToggle} type="checkbox" className={styles.checkbox} id="checkbox" />
        <label for="checkbox" className={styles.checkboxlabel}>
          <IoMoon style={{ color: "#f1c40f" }} />
          <FaSun style={{ color: "#f39c12" }} />
          <span className={styles.ball}></span>
        </label>
      </div>
    </div>
  )
}

export default Navbar