"use client";
import Image from "next/image";
import styles from "../styles/page.module.css";
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Man from '../public/man.png'
// import Iphone from '../../public/iphone.jpg'
// import Discuss from '../../public/discuss.jpg'
// import Typing from '../../public/typing.jpg'
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdSettingsApplications } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlinePlayCircle } from "react-icons/ai"
import Link from "next/link";
import axios from 'axios'; 

export default function Home() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000', formData)
      .then(response => {
        console.log(response.data);
        setSubmitted(true);
        setFormData({ name: '', email: '', text: '' }); // Clear form fields
        setError(''); // Clear any previous error message
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        setError('Failed to submit form. Please try again.'); // Display error message
      });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <div className={styles.body}>
        <section className={styles.sec1} id="1">
          <Navbar onToggleTheme={toggleTheme} />
          <div className={styles.hmain}>
            <div>
              <div>
                <div className={styles.introd}>
                  <div style={{ padding: "1rem" }}>
                    <p style={{ fontWeight: "bold", color: "black", margin: "1rem", fontSize: "1.5rem" }}>I'm Mayank Mishra A</p>
                    <p style={{ marginBottom: "1rem", color: "black" }}>An experienced software developer.</p>
                  </div>
                </div>
              </div>
              <div className={styles.mainimg}>
                <Image src={Man} alt="man" height={500} />
              </div>
            </div>
            <div style={{ margin: "1rem 2rem" }}>
              <p style={{ fontWeight: "bold", fontSize: "3rem", color: "black" }}>Software Developer</p>
            </div>
          </div>
        </section>
        <section className={styles.sec2} data-theme={theme} id="2">
          <div className={styles.aboutdiv}>
            <div style={{ width: "35%" }}>
              <div className={styles.videodiv}>
                {/* <Image src={Man1} alt="my video" height="100%" width={300}/> */}
                <AiOutlinePlayCircle style={{ position: "absolute", fontSize: "2rem", color: "white", top: "48%", left: "45%" }} />
              </div>
            </div>
            <div className={styles.abouttext}>
              <div><p style={{ color: "purple", fontSize: "1rem", fontWeight: "bold" }}>ABOUT ME</p></div>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>My name is <br /><p >Mayank Mishra</p></div>
              <div><p style={{ color: "rgb(167, 167, 167)" }}>I'm a backend developer at Wow Rooms Hospitality right now. I have been working with technologies such as expressjs, node.js, react, next, mysql, and mongodb. I pick things up quickly and have a constant hunger to learn new things from both people and technology.</p></div>
              <div style={{ marginTop: "0.5rem" }}>
                <p style={{ fontWeight: "bold" }}>1. Education & Qualification</p>
                <p style={{ color: "rgb(167, 167, 167)" }}>I completed my HSC at Mumbai's Bhavans College in Andheri West. In the science stream, I received a score of 62.15%. I completed my BScIT at Mumbai's Tolani College in Andheri East. CGPA-wise, I received a 7.82.</p>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <p style={{ fontWeight: "bold" }}>2. Backend Developer</p>
                <p style={{ color: "rgb(167, 167, 167)" }}>I've been a backend engineer at Wow Rooms Hospitality for the past six months. I learned a great deal about several technologies here, including React, Node.js, Next.js, and others. I have contributed to and worked on a number of projects. I have experience creating APIs, front-end user interfaces, and API integrations.</p>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <p style={{ fontWeight: "bold" }}>3. Projects Link Github</p>
                <Link href={"https://github.com/Mayank08M"} target="_blank" style={{ color: "rgb(167, 167, 167)", cursor: "pointer" }}>github.com/Mayank08M</Link>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sec3} data-theme={theme} id="3">
          <div>
            <div style={{ textAlign: "center", color: "purple", fontWeight: "bold", padding: "2rem 0 0.5rem 0" }}><p style={{ marginBottom: "0" }}>EXPERIENCE & SERVICES</p></div>
            <div style={{ textAlign: "center", fontSize: "1.5rem" }}><p>I can provide you help in this fields.</p></div>
            <div className={styles.griddiv}>
              <div className={styles.card}>
                <div style={{ padding: "1rem", borderRadius: "10px", background: "rgb(220, 220, 255)", width: "18%", margin: "1rem", height: "4rem" }}>
                  <MdSettingsApplications style={{ fontSize: "1.8rem", color: "black" }} />
                </div>
                <div style={{ padding: "0 2.5rem 0 1rem" }}>
                  <p style={{ marginBottom: "0.5rem" }}>API integration</p>
                  <p style={{ color: "rgb(167, 167, 167)", marginBottom: "1rem" }}>I can work on API integration in frontend from backend APIs.</p>
                </div>
              </div>
              <div className={styles.card}>
                <div style={{ padding: "1rem", borderRadius: "10px", background: "rgb(220, 220, 255)", width: "18%", margin: "1rem", height: "4rem" }}>
                  <FaUserCog style={{ fontSize: "1.8rem", color: "black" }} />
                </div>
                <div style={{ padding: "0 2.5rem 0 1rem" }}>
                  <p>Frontend UI</p>
                  <p style={{ color: "rgb(167, 167, 167)" }}>I am able to assist you in creating attractive user interfaces. I'm knowledgeable and experienced in this field.</p>
                </div>
              </div>
              <div className={styles.card}>
                <div style={{ padding: "1rem", borderRadius: "10px", background: "rgb(220, 220, 255)", width: "18%", margin: "1rem", height: "4rem" }}>
                  <RiComputerLine style={{ fontSize: "1.8rem", color: "black" }} />
                </div>
                <div style={{ padding: "0 2.5rem 0 1rem" }}>
                  <p>Single page applications</p>
                  <p style={{ color: "rgb(167, 167, 167)" }}>I can help you in making single page applications form node and next js. A full stack application</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "grey" }} id="4">
          <div className={styles.formdiv}>
            <div><p style={{ fontWeight: "bold", fontSize: "1.5rem", color: "white", marginBottom: "1rem" }}>You Can Contact Me</p></div>
            <div className={styles.formmaindiv} data-theme={theme}>
              <p style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1rem" }}>Get in touch</p>
              <p style={{ fontWeight: "bold", fontStyle: "italic", marginBottom: "1rem" }}>Want to work with me than please feel free to contact by sending the filled form below.</p>
              <p>Phone no. +91 9152726297</p>
              <p>Email ID - mayank0806md@gmail.com</p>
              <form style={{ marginTop: "2rem" }} onSubmit={ handleSubmit }>
                <input name="name" type="text" className={styles.feedbackinput} placeholder="Name" onChange={handleChange}/>
                <input name="email" type="text" className={styles.feedbackinput} placeholder="Email" onChange={handleChange}/>
                <textarea name="text" className={styles.feedbackinput} placeholder="Comment" onChange={handleChange}></textarea>
                <input className={styles.submit} type="submit" value="SUBMIT" />
              </form>
            </div>
          </div>
        </section>
        {/* <section style={{ background: "white" }}>
          <div style={{ padding: "2rem 4rem" }}>
            <div style={{ textAlign: "center" }}><p style={{ color: "purple", fontWeight: "bold" }}>BLOGS</p></div>
            <div style={{ textAlign: "center" }}><p style={{ fontSize: "2rem" }}>Latest Blogs</p></div>
            <div className={styles.blogmaindiv}>
              <div className={styles.blogdiv}>
                <div><Image src={Iphone} className={styles.cardimg} /></div>
                <div style={{ width: "100%", padding: "0.2rem 1rem", height: "50%" }}>
                  <div><p style={{ fontWeight: "bold", marginBottom: "1rem", marginTop: "0.5rem" }}>Design your apps</p></div>
                  <div><p style={{ marginBottom: "1rem", color: "rgb(167, 167, 167)" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, blanditiis! mamama uudh jhdauhc kgdygh</p></div>
                  <div style={{ marginBottom: "1rem", fontWeight: "bold", cursor: "pointer", color: "#CC4949" }}>Read more &#8594;</div>
                </div>
              </div>
              <div className={styles.blogdiv}>
                <div><Image src={Discuss} className={styles.cardimg} /></div>
                <div style={{ width: "100%", padding: "0.2rem 1rem", height: "50%" }}>
                  <div><p style={{ fontWeight: "bold", marginBottom: "1rem", marginTop: "0.5rem" }}>Design your apps</p></div>
                  <div><p style={{ marginBottom: "1rem", color: "rgb(167, 167, 167)" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, blanditiis! mamama uudh jhdauhc kgdygh</p></div>
                  <div style={{ marginBottom: "1rem", fontWeight: "bold", cursor: "pointer", color: "#CC4949" }}>Read more &#8594;</div>
                </div>
              </div>
              <div className={styles.blogdiv}>
                <div><Image src={Typing} className={styles.cardimg} /></div>
                <div style={{ width: "100%", padding: "0.2rem 1rem", height: "50%" }}>
                  <div><p style={{ fontWeight: "bold", marginBottom: "1rem", marginTop: "0.5rem" }}>Design your apps</p></div>
                  <div><p style={{ marginBottom: "1rem", color: "rgb(167, 167, 167)" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, blanditiis! mamama uudh jhdauhc kgdygh</p></div>
                  <div style={{ marginBottom: "1rem", fontWeight: "bold", cursor: "pointer", color: "#CC4949" }}>Read more &#8594;</div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className={styles.sec5} data-theme={theme}>
          <div className={styles.footerdiv}>
            <div>Mayank Mishra</div>
            <div className={styles.copyrights}>@2024 All copyrights are reserved<br />Made by <strong>Mayank Mishra</strong></div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div><Link href={"https://www.instagram.com/mayank__mishra08/"} target="_blank"><FaInstagram style={{ fontSize: "1.5rem" }} className={styles.insta} /></Link></div>
              <div style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}><Link href={"https://github.com/Mayank08M?tab=overview&from=2024-03-01&to=2024-03-11"} target="_blank"><FaGithub style={{ fontSize: "1.5rem" }} className={styles.github} /></Link></div>
              <div><Link href={"https://www.instagram.com/mayank__mishra08/"} target="_blank"><FaFacebookSquare style={{ fontSize: "1.5rem" }} className={styles.facebook} /></Link></div>
            </div>
          </div>
        </section>
        <div className={styles.scrollb} data-theme={theme} onClick={scrollToTop}><FaArrowAltCircleUp style={{ fontSize: "2.5rem" }} /></div>
      </div>
    </>
  );
}
