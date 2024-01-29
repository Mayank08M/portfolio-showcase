"use client";
import Image from "next/image";
import styles from "../../styles/page.module.css";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Man from '../../public/man.png'
import Iphone from '../../public/iphone.jpg'
import Discuss from '../../public/discuss.jpg'
import Typing from '../../public/typing.jpg'
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlinePlayCircle } from "react-icons/ai"

export default function Home() {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <div className={styles.body}>
        <section className={styles.sec1}>
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
              <p style={{ fontWeight: "bold", fontSize: "3rem", color: "black" }}>Mayank Mishra</p>
            </div>
          </div>
        </section>
        <section className={styles.sec2} data-theme={theme}>
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
              <div><p style={{ color: "rgb(167, 167, 167)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, numquam illum? Corporis iste explicabo aspernatur labore, reiciendis amet impedit aut expedita ducimus iusto maxime sapiente enim, a vel quia repellendus.</p></div>
              <div style={{ marginTop: "0.5rem" }}>
                <p style={{ fontWeight: "bold" }}>1. Solutions Archetectuire</p>
                <p style={{ color: "rgb(167, 167, 167)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, est. Sint earum dolorem accusamus amet numquam at vero qui! Et quaerat ratione quod unde corporis ut quidem numquam. Quibusdam, fugiat.</p>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <p style={{ fontWeight: "bold" }}>2. Software Developer</p>
                <p style={{ color: "rgb(167, 167, 167)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, est. Sint earum dolorem accusamus amet numquam at vero qui! Et quaerat ratione quod unde corporis ut quidem numquam. Quibusdam, fugiat.</p>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <p style={{ fontWeight: "bold" }}>3. Project Manager</p>
                <p style={{ color: "rgb(167, 167, 167)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, est. Sint earum dolorem accusamus amet numquam at vero qui! Et quaerat ratione quod unde corporis ut quidem numquam. Quibusdam, fugiat.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sec3} data-theme={theme}>
          <div>
            <div style={{ textAlign: "center", color: "purple", fontWeight: "bold", padding: "2rem 0 0.5rem 0" }}><p style={{ marginBottom: "0" }}>EXPERIENCE & SERVICES</p></div>
            <div style={{ textAlign: "center", fontSize: "1.5rem" }}><p>I can provide you help in this fields.</p></div>
            <div className={styles.griddiv}>
              <div className={styles.card}>
                <div style={{ padding: "1rem", borderRadius: "10px", background: "rgb(220, 220, 255)", width: "18%", margin: "1rem", height: "4rem" }}>
                  <RiComputerLine style={{ fontSize: "1.8rem" }} />
                </div>
                <div style={{ padding: "0 2.5rem 0 1rem" }}>
                  <p style={{ marginBottom: "0.5rem" }}>Enterprise Solution Design</p>
                  <p style={{ color: "rgb(167, 167, 167)", marginBottom: "1rem" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla ipsa ipsam incidunt similique quam alias iusto quaerat non omnis!</p>
                </div>
              </div>
              <div className={styles.card}>
                <div style={{ padding: "1rem", borderRadius: "10px", background: "rgb(220, 220, 255)", width: "18%", margin: "1rem", height: "4rem" }}>
                  <RiComputerLine style={{ fontSize: "1.8rem" }} />
                </div>
                <div style={{ padding: "0 2.5rem 0 1rem" }}>
                  <p>Enterprise Solution Design</p>
                  <p style={{ color: "rgb(167, 167, 167)" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla ipsa ipsam incidunt similique quam alias iusto quaerat non omnis!</p>
                </div>
              </div>
              <div className={styles.card}>
                <div style={{ padding: "1rem", borderRadius: "10px", background: "rgb(220, 220, 255)", width: "18%", margin: "1rem", height: "4rem" }}>
                  <RiComputerLine style={{ fontSize: "1.8rem" }} />
                </div>
                <div style={{ padding: "0 2.5rem 0 1rem" }}>
                  <p>Enterprise Solution Design</p>
                  <p style={{ color: "rgb(167, 167, 167)" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla ipsa ipsam incidunt similique quam alias iusto quaerat non omnis!</p>
                </div>
              </div>
              <div className={styles.card}>
                <div style={{ padding: "1rem", borderRadius: "10px", background: "rgb(220, 220, 255)", width: "18%", margin: "1rem", height: "4rem" }}>
                  <RiComputerLine style={{ fontSize: "1.8rem" }} />
                </div>
                <div style={{ padding: "0 2.5rem 0 1rem" }}>
                  <p style={{ marginBottom: "0.5rem" }}>Enterprise Solution Design</p>
                  <p style={{ color: "rgb(167, 167, 167)" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla ipsa ipsam incidunt similique quam alias iusto quaerat non omnis!</p>
                </div>
              </div>
              <div className={styles.card}>
                <div style={{ padding: "1rem", borderRadius: "10px", background: "rgb(220, 220, 255)", width: "18%", margin: "1rem", height: "4rem" }}>
                  <RiComputerLine style={{ fontSize: "1.8rem" }} />
                </div>
                <div style={{ padding: "0 2.5rem 0 1rem" }}>
                  <p>Enterprise Solution Design</p>
                  <p style={{ color: "rgb(167, 167, 167)" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla ipsa ipsam incidunt similique quam alias iusto quaerat non omnis!</p>
                </div>
              </div>
              <div className={styles.card}>
                <div style={{ padding: "1rem", borderRadius: "10px", background: "rgb(220, 220, 255)", width: "18%", margin: "1rem", height: "4rem" }}>
                  <RiComputerLine style={{ fontSize: "1.8rem" }} />
                </div>
                <div style={{ padding: "0 2.5rem 0 1rem" }}>
                  <p>Enterprise Solution Design</p>
                  <p style={{ color: "rgb(167, 167, 167)" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla ipsa ipsam incidunt similique quam alias iusto quaerat non omnis!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "grey" }}>
          <div className={styles.formdiv}>
            <div><p style={{ fontWeight: "bold", fontSize: "1.5rem", color: "white", marginBottom: "1rem" }}>You Can Contact Me</p></div>
            <div className={styles.formmaindiv} data-theme={theme}>
              <p style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1rem" }}>Get in touch</p>
              <p style={{ fontWeight: "bold", fontStyle: "italic", marginBottom: "1rem" }}>Want to work with me than please feel free to contact by sending the filled form below.</p>
              <p>Phone no. +91 9152726297</p>
              <p>Email ID - mayank@gmail.com</p>
              <form style={{ marginTop: "2rem" }}>
                <input name="name" type="text" className={styles.feedbackinput} placeholder="Name" />
                <input name="email" type="text" className={styles.feedbackinput} placeholder="Email" />
                <textarea name="text" className={styles.feedbackinput} placeholder="Comment"></textarea>
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
              <div><FaInstagram style={{ fontSize: "1.5rem" }} className={styles.insta} /></div>
              <div style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}><FaGithub style={{ fontSize: "1.5rem" }} className={styles.github} /></div>
              <div><FaFacebookSquare style={{ fontSize: "1.5rem" }} className={styles.facebook} /></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
