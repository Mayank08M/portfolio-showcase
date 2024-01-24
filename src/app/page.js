import Image from "next/image";
import styles from "../../styles/page.module.css";
import Navbar from "../../components/Navbar";
import Man from '../../public/man.png'
import { RiComputerLine } from "react-icons/ri";
import { AiOutlinePlayCircle } from "react-icons/ai"

export default function Home() {
  return (
    <>
    <div className={styles.body}>
      <section className={styles.sec1}>
      <Navbar />
      <div className={styles.hmain}>
      <div>
      <div>
      <div className={styles.introd}>
        <div style={{padding:"1rem"}}>
          <p style={{fontWeight:"bold", color:"black", margin:"1rem", fontSize:"1.5rem"}}>I'm Mayank Mishra A</p>
          <p style={{marginBottom:"1rem", color:"black"}}>highly xperienced web devloper</p>
        </div>
      </div>
      </div>
      <div style={{position:"relative"}}>
        <Image src={Man} alt="man" height={500} />
        </div>
      </div>
      <div style={{margin:"1rem 2rem"}}>
        <p style={{fontWeight:"bold", fontSize:"3rem", color:"black"}}>Mayank Mishra</p>
      </div>
      </div>
      </section>
      <section style={{background:"white"}}>
        <div style={{display:"flex", justifyContent:"center", padding:"3rem 2rem"}}>
          <div style={{width:"35%"}}>
          <div className={styles.videodiv}>
            {/* <Image src={Man1} alt="my video" height="100%" width={300}/> */}
            <AiOutlinePlayCircle style={{position:"absolute", fontSize:"2rem", color:"white", top:"48%", left:"45%"}}/>
          </div>
          </div>
          <div style={{width:"50%", marginLeft:"2rem"}}>
            <div><p style={{color:"purple", fontSize:"1rem", fontWeight:"bold"}}>ABOUT ME</p></div>
            <div style={{fontSize:"2rem", marginBottom:"1rem"}}>My name is <br/><p >Mayank Mishra</p></div>
            <div><p style={{color:"rgb(167, 167, 167)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, numquam illum? Corporis iste explicabo aspernatur labore, reiciendis amet impedit aut expedita ducimus iusto maxime sapiente enim, a vel quia repellendus.</p></div>
            <div style={{marginTop:"0.5rem"}}>
              <p style={{fontWeight:"bold"}}>1. Solutions Archetectuire</p>
              <p style={{color:"rgb(167, 167, 167)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, est. Sint earum dolorem accusamus amet numquam at vero qui! Et quaerat ratione quod unde corporis ut quidem numquam. Quibusdam, fugiat.</p>
            </div>
            <div style={{marginTop:"0.5rem"}}>
              <p style={{fontWeight:"bold"}}>2. Software Developer</p>
              <p style={{color:"rgb(167, 167, 167)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, est. Sint earum dolorem accusamus amet numquam at vero qui! Et quaerat ratione quod unde corporis ut quidem numquam. Quibusdam, fugiat.</p>
            </div>
            <div style={{marginTop:"0.5rem"}}>
              <p style={{fontWeight:"bold"}}>3. Project Manager</p>
              <p style={{color:"rgb(167, 167, 167)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, est. Sint earum dolorem accusamus amet numquam at vero qui! Et quaerat ratione quod unde corporis ut quidem numquam. Quibusdam, fugiat.</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{background:"rgb(240, 240, 240)"}}>
        <div>
          <div style={{textAlign:"center", color:"purple", fontWeight:"bold", padding:"2rem 0 0.5rem 0"}}><p style={{marginBottom:"0"}}>EXPERIENCE & SERVICES</p></div>
          <div style={{textAlign:"center", fontSize:"2rem"}}><p>I can provide you help in this fields.</p></div>
          <div className={styles.griddiv}>
            <div className={styles.card}>
              <div style={{padding:"1rem", borderRadius:"10px", background:"rgb(220, 220, 255)", width:"18%", margin:"1rem", height:"4rem"}}>
                <RiComputerLine style={{fontSize:"1.8rem"}}/>
              </div>
              <div style={{padding:"0 2.5rem 0 1rem"}}>
                <p style={{marginBottom:"0.5rem"}}>Enterprise Solution Design</p>
                <p style={{color:"rgb(167, 167, 167)", marginBottom:"1rem"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla ipsa ipsam incidunt similique quam alias iusto quaerat non omnis!</p>
              </div>
            </div>
            <div className={styles.card}>
              <div style={{padding:"1rem", borderRadius:"10px", background:"rgb(220, 220, 255)", width:"18%", margin:"1rem", height:"4rem"}}>
                <RiComputerLine style={{fontSize:"1.8rem"}}/>
              </div>
              <div style={{padding:"0 2.5rem 0 1rem"}}>
                <p>Enterprise Solution Design</p>
                <p style={{color:"rgb(167, 167, 167)"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla ipsa ipsam incidunt similique quam alias iusto quaerat non omnis!</p>
              </div>
            </div>
            <div className={styles.card}>
              <div style={{padding:"1rem", borderRadius:"10px", background:"rgb(220, 220, 255)", width:"18%", margin:"1rem", height:"4rem"}}>
                <RiComputerLine style={{fontSize:"1.8rem"}}/>
              </div>
              <div style={{padding:"0 2.5rem 0 1rem"}}>
                <p>Enterprise Solution Design</p>
                <p style={{color:"rgb(167, 167, 167)"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla ipsa ipsam incidunt similique quam alias iusto quaerat non omnis!</p>
              </div>
            </div>
            <div className={styles.card}>
              <div style={{padding:"1rem", borderRadius:"10px", background:"rgb(220, 220, 255)", width:"18%", margin:"1rem", height:"4rem"}}>
                <RiComputerLine style={{fontSize:"1.8rem"}}/>
              </div>
              <div style={{padding:"0 2.5rem 0 1rem"}}>
                <p style={{marginBottom:"0.5rem"}}>Enterprise Solution Design</p>
                <p style={{color:"rgb(167, 167, 167)"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla ipsa ipsam incidunt similique quam alias iusto quaerat non omnis!</p>
              </div>
            </div>
            <div className={styles.card}>
              <div style={{padding:"1rem", borderRadius:"10px", background:"rgb(220, 220, 255)", width:"18%", margin:"1rem", height:"4rem"}}>
                <RiComputerLine style={{fontSize:"1.8rem"}}/>
              </div>
              <div style={{padding:"0 2.5rem 0 1rem"}}>
                <p>Enterprise Solution Design</p>
                <p style={{color:"rgb(167, 167, 167)"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla ipsa ipsam incidunt similique quam alias iusto quaerat non omnis!</p>
              </div>
            </div>
            <div className={styles.card}>
              <div style={{padding:"1rem", borderRadius:"10px", background:"rgb(220, 220, 255)", width:"18%", margin:"1rem", height:"4rem"}}>
                <RiComputerLine style={{fontSize:"1.8rem"}}/>
              </div>
              <div style={{padding:"0 2.5rem 0 1rem"}}>
                <p>Enterprise Solution Design</p>
                <p style={{color:"rgb(167, 167, 167)"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla ipsa ipsam incidunt similique quam alias iusto quaerat non omnis!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{background:"grey"}}>
        <div style={{padding:"2rem 18rem", textAlign:"center"}}>
          <div><p style={{fontWeight:"bold", fontSize:"1.5rem", color:"white", marginBottom:"1rem"}}>You Can Contact Me</p></div>
          <div style={{background:"white", padding:"3rem 1rem"}}>
            <p style={{fontWeight:"bold", fontSize:"1.5rem", marginBottom:"1rem"}}>Get in touch</p>
            <p style={{fontWeight:"bold", fontStyle:"italic", marginBottom:"1rem"}}>Want to work with me than please feel free to contact by sending the filled form below.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, illum.</p>
            <p>Phone no. +91 9152726297</p>
            <p>Email ID - mayank@gmail.com</p>
            <form style={{marginTop:"2rem"}}>      
  <input name="name" type="text" className={styles.feedbackinput} placeholder="Name" />   
  <input name="email" type="text" className={styles.feedbackinput} placeholder="Email" />
  <textarea name="text" className={styles.feedbackinput} placeholder="Comment"></textarea>
  <input className={styles.submit} type="submit" value="SUBMIT"/>
</form>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
