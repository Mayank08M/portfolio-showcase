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
          <span className={styles.menu}> <span className={styles.hamburger}></span> </span>
          <ul className={styles.navitem}>
            <li> <a href="#1">Home</a> </li>
            <li> <a href="#2">About</a> </li>
            <li><a href="#3">Services</a></li>
            <li> <a href="#4">Contact</a> </li>
          </ul>
        </label>
      </div>
      <div>
        <input onChange={handleThemeToggle} type="checkbox" className={styles.checkbox} id="checkbox" />
        <label htmlFor="checkbox" className={styles.checkboxlabel}>
          <IoMoon style={{ color: "#f1c40f" }} />
          <FaSun style={{ color: "#f39c12" }} />
          <span className={styles.ball}></span>
        </label>
      </div>
    </div>
  )
}

export default Navbar