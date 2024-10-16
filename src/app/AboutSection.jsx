
import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './aboutsection.module.css'
// import { GrLineChart } from "react-icons/gr";
// import { BsBoxSeam } from "react-icons/bs";
// import { FaRegHandshake } from "react-icons/fa6";
// import { FaEarthAmericas  } from "react-icons/fa6";
// import { MdOutlineConnectWithoutContact } from "react-icons/md";
import clientData from './clientData.json';
import FadeInOnScroll from './FadeInOnScroll';

import Patents from './Patents';

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
  })

const AboutSection = () => {
    return (
        <div>
            <FadeInOnScroll>
             <div className='section_title'>
                About.
            </div>
            <div className={styles.about}>    
                
                <div className={styles.about_section}>
                    <div className={styles.image_container}>
                        <img src={clientData.About.image} alt={clientData.About.image_alt} className={styles.about_image}/>
                    </div>
                    <div className={`${montserrat.className} ${styles.about_body_container}`}>
                        <div className='redborder'> 
                            <div className={styles.redborder_title}>
                                {clientData.About.title} 
                                <div style={{fontSize: "15px"}}>{clientData.About.sub_title}</div>
                            </div>
                        </div>
                        <div className={styles.about_body}>
                            {clientData.About.body.map((bod, index) => (
                                <p key={index}>
                                    {bod}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={montserrat.className}>
                    
                        
                <div className={styles.about_paragraphs}>
                        <img className={styles.about_paragraphs_image} src="/about/mentorship.png" alt="Trend icons created by Freepik - Flaticon" />
                        <p>{clientData.About.para1}</p>
                    </div>

                     <div className={styles.about_paragraphs}>
                        <img className={styles.about_paragraphs_image} src="/about/connection.png" alt="Trend icons created by Freepik - Flaticon" />
                        <p>{clientData.About.para2}</p>
                    </div>

                    <div className={styles.about_paragraphs}>
                        <img className={styles.about_paragraphs_image} src="/about/idea.png" alt="Trend icons created by Freepik - Flaticon" />
                        <p>{clientData.About.para3}</p>
                    </div>

                     <div className={styles.about_paragraphs}>
                        <img className={styles.about_paragraphs_image} src="/about/improvement.png" alt="Trend icons created by Freepik - Flaticon" />
                        <p>{clientData.About.para4}</p>
                    </div>                    
                </div>
            </div>
            {/******** WHO AM I SECTION **********/}
            <div className={styles.whoami}>
                <div className={styles.gridContainer}>
                        <div className={styles.gridItem_a}>
                            <div className={styles.whoami_box}>
                                <h1 className={styles.section_title}><span className='redfont'>Who</span> am i?</h1>
                                <div className={montserrat.className}>
                                    <div className={styles.whoami_body}>
                                        <div style={{textAlign: 'center', marginBottom: '15px'}}>
                                            <img src="/about/portfolio.png" width="60px" className={styles.whoami_icon}/>                                           
                                           
                                        </div>
                                        <p style={{textAlign: 'center', lineHeight: 2.2}} dangerouslySetInnerHTML={{ __html: clientData.About.whoami_box}}></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.gridItem}>
                            <div className={styles.whoami_box_color}>
                            <img src={clientData.About.bg_image}
                                alt={clientData.About.bg_image_alt}
                                className={styles.whoami_image} />
                            </div>
                            <div className={`${styles.textOverlay} ${montserrat.className}`}>
                                {/* <img src="/about/speaker.png" width="60px" /> */}
                                
                              <p >Neque convallis a cras semper auctor neque vitae. Viverra accumsan in nisl nisi. Fermentum odio eu feugiat pretium nibh. Faucibus purus in massa tempor nec feugiat nisl pretium. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Pharetra et ultrices neque ornare aenean euismod.</p>
                              <p>Viverra accumsan in nisl nisi. Faucibus purus in massa tempor nec feugiat nisl pretium. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Pharetra et ultrices neque ornare aenean euismod. Molestie at elementum eu facilisis sed odio morbi.</p>
                            </div>
                        </div>
                        
                        <div className={styles.gridItem_c}>
                        <div className={styles.whoami_box}>
                        <h1 className={styles.section_title}><span className='redfont'>Goals</span> </h1>
                                <div className={montserrat.className}>
                                  
                                        <div className={montserrat.className}>
                                        <div className={styles.body}>
                                            <img src="/about/graduationcap.png" width="60px" className={styles.whoami_icon}/>
                                            <p style={{textAlign: 'center', lineHeight: 2.2}}>My goal is to transition into a project manager role that would successfully support an organizations strategic initiatives.</p>
                                            <p></p>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>

                </div>
            </div>

            

            </FadeInOnScroll>
        </div>   
    );
}

export default AboutSection;
