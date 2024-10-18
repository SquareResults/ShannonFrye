import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './timeline.module.css'

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
  })

const TimelineSection = () => {
  const timelineData = [
    {
      jobtitle: 'Bachelor of Business Administration (BBA), Health Administration',
      company: 'MARSHALL UNIVERSITY',
      location: 'Huntington, WV',
      dates: '',
    },
    {
      jobtitle: 'Master of Hospital and Health Administration (MHA)',
      company: 'XAVIER UNIVERSITY',
      location: 'Cincinnati, OH',
    },
    {
      jobtitle: 'Administrative Intern',
      company: 'ProMedica Health Systems',
    },
    {
      jobtitle: 'Strategic Planning',
      company: 'Flower Hospital',
    },
    {
      jobtitle: 'Consultant',
      company: 'Medisync',
      company_sub: 'Now Pri-Med',
    },
    {
      jobtitle: 'Operations Manager',
      company: 'Cardiology Associate of Cincinnati Inc.',
      company_sub: 'Absorbed by Tri-Health',
    },
    {
      jobtitle: 'Operations Manager',
      company: 'Franciscan Medical Group/ProWellness',
    },
    {
      jobtitle: 'Operations Manager',
      company: 'Ohio Valley Medical Group/ProWellness Health Management', 
      company_sub: 'Franciscan Medical Center',
    },
    {
      jobtitle: 'Operations Manager',
      company: 'OrthoNeuro, Inc.',
    },
    {
      jobtitle: 'Pharmaceutical Sales Specialist Level III',
      company: 'ASTRAZENECA PHARMACEUTICALS',
    },
    {
      jobtitle: 'Senior Diabetes Care Specialist',
      company: 'NOVONORDISK, LLC',
      dates: '11/2010 - 01/2021',
    },
    {
      jobtitle: 'Physician Relations Manager',
      company: 'PREMIER HEALTH',
      dates: '4/2021 - 9/2022',
    },
    {
      jobtitle: 'Account Manager – Core Applications',
      company: 'TEKsystems, Inc',
      dates: '9/2022 - Present',
    },
    
  ];
    

    return (
        <div>
            <div className='section_title'>Timeline.</div>
            
                <div className={styles.timeline}>
                {timelineData.map((item, index) => (
                    <div key={index} className={index % 2 === 0 ? styles.blurb_left : styles.blurb_right}>
                        <div className={index % 2 === 0 ? styles.left : styles.right}>
                        <div className={styles.content}>
                            {item.jobtitle ? <div className={styles.jobtitle}>{item.jobtitle}</div> : null }
                            <div className={styles.company}>
                              <p>{item.company}</p>
                              {item.company_sub ? <p style={{fontSize: 'small', textTransform: 'uppercase'}} className={montserrat.className}>{item.company_sub}</p> : null }
                            </div>
                            <div className={montserrat.className}>
                              <p className={styles.location}>{item.location}</p>
                              {item.dates ? <p className={styles.dates}>{item.dates}</p> : null}
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
              
                <div className={styles.timeline_end}></div>

        </div>
     
    );
}

export default TimelineSection;