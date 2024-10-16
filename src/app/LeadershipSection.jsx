import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './leadership.module.css'
// import { FaChartBar  } from 'react-icons/fa';
import clientData from './clientData.json';
import FadeInOnScroll from './FadeInOnScroll';


const montserrat = Montserrat({
    weight: ['300', '400'],
    subsets: ['latin']
  })

const LeadershipSection = ({refs}) => {
    return (
        <div style={{marginTop: "20%"}}>
             <FadeInOnScroll>
            <div className={styles.leadership} ref={refs.leadershipRef}>
                <h1 className={styles.title}>{clientData.Leadership.title}</h1>
                <div className={montserrat.className}>
                    <div className={styles.round_container}>
                        {clientData.Leadership.list_of_skills.map((skill, index) => (
                            <div className={styles.round_item} key={index}>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            
            </FadeInOnScroll>
        </div>
        
    );
}

export default LeadershipSection;