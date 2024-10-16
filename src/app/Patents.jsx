import React from 'react';
import { Montserrat } from 'next/font/google'
import styles from './patents.module.css'
import FadeInOnScroll from './FadeInOnScroll';
import clientData from './clientData.json';

const montserrat = Montserrat({
    weight: ['200','400', '500', '700', '800'],
    subsets: ['latin']
  })

const patentData = [
        {
            title_1: "SYSTEM AND METHOD FOR CONTENT RECOGNITION AND DATA CATEGORIZATION",
            sub_title1: "US 12,033,190",
        
        },
        {
            title_2: "SYSTEM AND METHOD FOR CONTENT RECOGNITION AND DATA CATEGORIZATION",
            sub_title2: "US 12,033,190",
        
        },
        {
            title_3: "SYSTEM AND METHOD FOR CONTENT RECOGNITION AND DATA CATEGORIZATION",
            sub_title3: "US 12,033,190"
        
        },
        {
            title_4: "SYSTEM AND METHOD FOR CONTENT RECOGNITION AND DATA CATEGORIZATION",
            sub_title4: "US 12,033,190",
        
        },
        {
            title_5: "SYSTEM AND METHOD FOR CONTENT RECOGNITION AND DATA CATEGORIZATION",
            sub_title5: "US 12,033,190",
        
        },
   
]

const Patents = () => {
    return (
        <div>
            <FadeInOnScroll>
             <div className='section_title'>
                Achievements
            </div>
            <div className={styles.uhaul}>
            <div className={`${styles.gridContainer} ${montserrat.className}`}>            
            
                {/* FIRST SECTION */}
                <div className={`${styles.gridItem_quote} ${styles.photo} ${styles.blackbg} ${styles.firstSection}`} style={{width: '80%'}}>
                    <div className={styles.quote_author}>Winner of Area Circle of Excellence (COE) Award</div>

                    <div className={styles.quote_author_title}>
                        
                        <div className={styles.quote_author_semibold}>
                            <p>exclusively given to Top 10% - 13% of company’s highest achievers</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.gridItem_quote_sm} ${styles.beigegrid}`} style={{width: '20%'}}></div>

                {/* 2ND SECTION */}
                <div className={`${styles.gridItem} ${styles.redgrid}`} style={{width: '40%'}}>
                </div>
                <div className={`${styles.gridItem_social_photo} ${styles.gridItem_quote}  ${styles.photo} ${styles.redbg} ${styles.secondSection}`}>
                    <div className={styles.quote_author}>NovoLog Blockbuster Club Winner </div>
                    
                    <div className={styles.quote_author_title}>
                        
                        <div className={styles.quote_author_semibold}>
                            <p>Recognized for surpassing a market share of 50% or greater for NovoLog rapid acting insulin</p>
                        </div>
                    </div>
                </div>

                {/* THIRD SECTION */}
                <div className={`${styles.gridItem_social_photo} ${styles.beigegrid} ${styles.gridItem_quote}`} style={{width: '50%'}}>
                <div className={styles.quote_author}>Winner Nexium Purple Pinnacle Award</div>
                    <div className={styles.quote_author_title}>
                        
                        <div className={styles.quote_author_semibold}>
                            <p>This is awarded to teams that reached a milestone of having a 50% market share or greater</p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.gridItem_social_photo} ${styles.photo} ${styles.blackbg} ${styles.thirdSection}`} style={{width: '50%'}}>
                </div>

                {/* FOURTH SECTION */}
                <div className={`${styles.gridItem_quote_sm} ${styles.redgrid}`} style={{width: '20%'}}></div>
                <div className={`${styles.gridItem_quote} ${styles.redbg} ${styles.photo} ${styles.fourthSection}`} style={{width: '80%'}}>
                    <div className={styles.quote_author}>Rated in Top 5% of Area</div>
                    
                    <div className={styles.quote_author_title}>
                        
                        <div className={styles.quote_author_semibold}>
                            <p>when launching Onglyza, Crestor, and Pulmicort Respules new products</p>
                        </div>
                    </div>
                </div>

                {/* FIFTH SECTION */}
                 <div className={`${styles.gridItem_quote} ${styles.photo} ${styles.blackbg} ${styles.fifthSection}`} style={{width: '80%'}}>
                    <div className={styles.quote_author}>Appointed Member Levemir Core Team</div>
                    
                    <div className={styles.quote_author_title}>
                        
                        <div className={styles.quote_author_semibold}>
                            <p>selected as one of nine sales specialists to work with district and regional managers to help implement strategic initiatives across the region</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.gridItem_quote_sm} ${styles.beigegrid}`} style={{width: '20%'}}></div>

                {/* SIXTH SECTION */}
                <div className={`${styles.gridItem} ${styles.redgrid}`} style={{width: '40%'}}>
                    </div>
                <div className={`${styles.gridItem_social_photo} ${styles.gridItem_quote} ${styles.photo} ${styles.redbg} ${styles.sixthSection}`} >
                    <div className={styles.quote_author}>Appointed Member Masterminds Team</div>

                    <div className={styles.quote_author_title}>
                        
                        <div className={styles.quote_author_semibold}>
                            <p>selected to work with district and regional managers to utilize and teach new technology to the Region</p>
                        </div>
                    </div>
                </div>

                

            </div>
            
            </div>
            </FadeInOnScroll>
        </div>   
    );
}

export default Patents;