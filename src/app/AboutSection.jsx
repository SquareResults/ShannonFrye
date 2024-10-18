import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './aboutsection.module.css';
import clientData from './clientData.json';
import FadeInOnScroll from './FadeInOnScroll';

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
});

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
                            <img src={clientData.About.image} alt={clientData.About.image_alt} className={styles.about_image} />
                        </div>
                        <div className={`${montserrat.className} ${styles.about_body_container}`}>
                            <div className='redborder'>
                                <div className={styles.redborder_title}>
                                    {clientData.About.title}
                                    <div style={{ fontSize: "15px" }}>{clientData.About.title_sub}</div>
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
                                        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                                            <img src="/about/portfolio.png" width="60px" className={styles.whoami_icon} />
                                            <p>My career journey started in healthcare administration within Health System and then transitioned to the strategic planning department at a major hospital.</p>
                                            <p>This experience ignited my passion for ambulatory care management, which led me to move into medical operations management and project management.</p>
                                        </div>
                                        <p style={{ textAlign: 'center', lineHeight: 2.2 }} dangerouslySetInnerHTML={{ __html: clientData.About.whoami_box }}></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/******** HOBBIES SECTION **********/}
                        <div className={styles.gridItem}>
  <div className={styles.whoami_box}>
    <h1 className={styles.section_title}><span className='blackfont'>Hobbies</span></h1>
    <div className={montserrat.className}>
      <div className={styles.whoami_body}>
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <img src="/sw.jpg" height="150px" length="150px" className={styles.whoami_icon} />
          <p style={{ marginBottom: '80px' }}>Restoring vintage Star Wars memorabilia.</p> {/* Adjusted margin-bottom */}
          <div></div>
          <img src="/pinball.png" height="170px" length="150px" className={styles.whoami_icon} />
          <p>Pinball</p>
        </div>
      </div>
    </div>
  </div>
</div>


                        {/******** GOALS SECTION **********/}
                        <div className={styles.gridItem_c}>
                            <div className={styles.whoami_box}>
                                <h1 className={styles.section_title}><span className='redfont'>Goals</span></h1>
                                <div className={montserrat.className}>
                                    <div className={styles.body}>
                                        <img src="/about/graduationcap.png" width="60px" className={styles.whoami_icon} />
                                        <p style={{ textAlign: 'center', lineHeight: 2.2 }}>My goal is to transition into a project manager role where I can effectively support an organization’s strategic initiatives and goals. I am committed to leveraging my skills and experience to drive successful project outcomes and contribute to overall organizational success.</p>
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
