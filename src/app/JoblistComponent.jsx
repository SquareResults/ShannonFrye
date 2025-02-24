import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './joblist.module.css'

const montserrat = Montserrat({
    weight: ['400', '800'],
    subsets: ['latin']
  })

const JoblistComponent = () => {

    const jobData = [
        {
            img_logo: "./jobs/tek_systems.png",
            img_alt: "Tek Systems Logo",
            img_style:  '',
            jobtitle: "Account Manager",
            company: "TEKsystems",
            dates: "Sept 2022 - Present",
            job_description: [
                `Responsible for growing and maintaining 10 accounts focusing in the healthcare and manufacturing verticals; acting as the liaison between the account and TEKsystems’ IT services and functional role offerings. Experience includes:`
            ],
            skillset: "yes",
            skill_title: "",
            listofskills: [
                `Establishment and growing relationships with key stakeholders at all levels of the organization, from Individual Contributors to C-suite Executives, to build trust and facilitate effective partnerships`,
                `Working closely with key stakeholders to gain better understanding of business drivers and challenges. Presenting tailored solutions that leveraged TEK's strategic partnerships with AWS, Google Cloud, Microsoft, Red Hat, ServiceNow, and Snowflake to effectively address pain points.`,
                `Enhancing account value by providing insights into IT trends and educating partners on market developments including DE&I initiatives.`
            ],
        },
        {
            img_logo: "./jobs/premier_health.png",
            img_alt: "Premier Health Partners",
            img_style:  '',
            jobtitle: "Physician Relations Manager",
            company: "Premier Health Partners",
            dates: "April 2021 - Sept 2022",
            job_description: [
                `As a Physician Relations/Project Manager I responsible for:`
            ],
            skillset: "yes",
            skill_title: "",
            listofskills: [
                `Ensuring clear and concise communications between independent providers and Premier Health Partners.`,
                `Establishing and growing strategic relationships between providers and hospital/system administration.`,
                `Coordinating efforts to align stakeholder expectations, streamline communication channels, and enhance collaboration to meet expectations.`,
                `Leading initiatives to improve physician engagement, facilitated regular consultations, and addressed complex issues impacting healthcare delivery.`,
                `Developing and implementing comprehensive outreach programs and maintaining an extensive network of professional contacts to drive continuous improvement and operational excellence.`
            ],
        },
        {
            img_logo: "./jobs/novo.png",
            img_alt: "NovoNordisk, LLC",
            img_style:  '',
            jobtitle: "Senior Diabetes Care Specialist",
            company: "NovoNordisk, LLC",
            dates: "Nov 2010 - Jan 2021",
            job_description: [
                `Territory entrepreneur that led a logistics strategy for launching three blockbuster (over $100 million in sales) drugs by developing a plan of identifying stakeholders, tracking results, and adapting changes as needed that resulted in a quick uptake by district thought leaders.`
            ],
            skillset: "yes",
            skill_title: "",
            listofskills: [
                "Collaborated with internal decision makers of independent practices and key offices to implement initiatives, increasing the growth of Diabetes Portfolio as well as helping practices meet quality care and financial deliverables.", 
                "As a regional CRM expert, supported internal stakeholders' business acumen and professional growth by providing guidance on utilizing Novo Nordisk's business and learning systems.",
            ],
        },
        {
            img_logo: "./jobs/astra.png",
            img_alt: "AstraZeneca Pharmaceuticals Logo",
            img_style:  '',
            jobtitle: "Pharmaceutical Sales Specialist III",
            company: "AstraZeneca Pharmaceuticals",
            dates: "Feb 2001 - Sept 2010",
            job_description: [
                "In the role District Business Analyst, developed and implemented new business opportunities, researching and conveying actionable insights of trends resulting in better portfolio opportunities, stakeholder dynamics, and understanding of competitive environment. "
            ],
            skillset: "yes",
            skill_title: "",
            listofskills: [ 
                "Served as the District Training Champion, collaborating with the training department to implement and execute training initiatives at the district level. Additionally, traveled to the regional business center and national headquarters to provide training to newly hired representatives.",
                "Selected by the Regional Manager to be a member of the Field Focus Group that worked alongside regional and national sales leaders. Contributed to the improvement of the organization's sales force effectiveness by testing and providing feedback on sales initiatives and support tools.",
            ]
        },
        {
            img_logo: "./jobs/ortho.png",
            img_alt: "OrthoNeuro Logo",
            img_style:  '',
            jobtitle: "Operations Manager",
            company: "OrthoNeuro",
            dates: "",
            job_description: [
                "Researching local national and local market trends to support recommended new business ventures for capital investment consideration. This included investing in rehabilitation services as well as time-share for MRI services.",
            ],
            skillset: "yes",
            skill_title: "",
            listofskills: [
                "Working with variety of stakeholders to successfully implement, monitor, and adapt programs/projects to ensure success including leading two full medical records and revenue cycle computer conversions. This also included working with internal stakeholders and external vendors to keep the project on time, on schedule, and on budget.",
                "Regularly met with C-suite Executives to present project/deliverable progression and incorporate any suggestions into project",
            ],
        },
        {
            img_logo: "",
            img_alt: "",
            img_style:  '',
            jobtitle: "Operations Manager",
            company: "Franciscan Medical Group/ProWellness ",
            dates: "",
            job_description: [
                "Managed multiple physician offices including:",
                "Vandalia Family Medicine Center and Workplace Health – May 1998 – February 1999",
                "Vandalia Family Practice and Internal Medicine – May 1998 – February 1999",
                "Ohio Valley Medical Group Family Practice and Pediatrics – December 1997 – May 1998",

            ],
            skillset: "yes",
            skill_title: "",
            listofskills: [
                "Managed multiple physician practices within a multi-specialty Managed Service Organization. I was promoted managing multiple practices within 5 months of joining the organization.",
                "Responsible for the financial management of the multiple-physician practices. Ran each practice within corporate budgetary guidelines.",
                "Developed mechanisms for greater physician collaboration. This included holding monthly meetings and creating better reporting structures that resulted in increased physician communication.",
            ],
        },
        {
            img_logo: "./jobs/cardio.png",
            img_alt: "Cardiology Associate of Cincinnati Inc. Logo",
            img_style:  '',
            jobtitle: "Director of Operations",
            company: "Cardiology Associate of Cincinnati Inc.",
            dates: "",
            job_description: [
                "Responsible for the efficient operation of an 8-physician cardiology practice. Managed a staff of 25 people that included the Billing and Collections Department, Medical Records Department, and Front Desk Area.",
                "Implemented, coordinated and managed the practice’s information systems including its billing system and medical records conversion.",
            ],
            skillset: "no",
            skill_title: "",
            listofskills: [
                ``,
                ``,
                ``
            ],
        },
        {
            img_logo: "",
            img_alt: "",
            img_style:  '',
            jobtitle: "Strategic Planner",
            company: "Flower Hospital",
            dates: "",
            job_description: [
                "Reported directly to the Vice President of Strategic Planning. Was responsible for collecting and analyzing data to help the executive leadership team make informed decisions regarding the hospital’s product lines and search for new business opportunities.",
            ],
            skillset: "no",
            skill_title: "",
            listofskills: [
                ``,
                ``,
                ``
            ],
        },
        {
            img_logo: "",
            img_alt: "",
            img_style:  '',
            jobtitle: "Administrative Resident",
            company: "ProMedica Health Systems",
            dates: "",
            job_description: [
                "Reported directly to the CEO and President of ProMedica Health Systems. As an administrative resident I worked on a variety of projects under the direction of the systems executive team. This included working within the hospital and the hospital’s ancillary entities including its Physician Hospital Organization (PHO), its managed care entity – Paramount Healthcare as well as Toledo Children’s Hospital. Other projects include:",
            ],
            skillset: "yes",
            skill_title: "",
            listofskills: [
                "Lead Coordinator for a Medical Mission Trip to Ukraine – Responsible for organizing and directing resources for a 30 person pediatric cardiology mission trip. Working with the local media, this trip brought regional media exposure to the system.",
            ],
        },
        // {
        //     img_logo: "",
        //     img_alt: "",
        //     img_style:  '',
        //     jobtitle: "Adminstrative Intern",
        //     company: "ProMedica Health Systems",
        //     dates: "",
        //     job_description: [
        //         ``,
        //         ``,
        //         ``
        //     ],
        //     skillset: "no",
        //     skill_title: "",
        //     listofskills: [
        //         ``,
        //         ``,
        //         ``
        //     ],
        // },

        // {
        //     img_logo: "",
        //     img_alt: "",
        //     img_style:  '',
        //     jobtitle: "Volunteer",
        //     company: "Shoe the Shoeless",
        //     dates: "",
        //     job_description: [
        //         ``,
        //         ``,
        //         ``
        //     ],
        //     skillset: "no",
        //     skill_title: "",
        //     listofskills: ["", ""]
        // },

    ]



    return (
        <div>
            <div className={styles.joblist}>
                {jobData.map((item, index) => (
                    <div key={index}>
                    <div className={styles.company_image}>
                        <img src={item.img_logo} alt={item.img_alt} className={styles.image} style={item.img_style ? JSON.parse(item.img_style) : {}}/>
                    </div>
                    { index > 0 ? <div className={styles.lineborder}></div> : null}
                        <div className='redborder'>
                            <div className={styles.redborder_title}>
                                {item.jobtitle}
                                <p className='redfont'>{item.company}</p>
                            </div>
                        </div>
                        <div className={montserrat.className}>
                            <div className={styles.time}>
                                {item.dates}
                            </div>
                            <div className={styles.description}>
                                <ul className={styles.list}>
                                    {item.job_description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {item.skillset === 'yes' && (
                            <div key={index}>
                            <div className={styles.title}>
                               {item.skill_title}
                            </div>
                            <div className={montserrat.className}>
                               <ul className={styles.list}>
                                    {item.listofskills.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                               </ul>
                           </div>
                           </div>
                        )}
                    </div>
                ))}
                
            </div>
        </div>   
    );
}

export default JoblistComponent;