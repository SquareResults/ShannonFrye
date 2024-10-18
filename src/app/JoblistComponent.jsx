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
                `Responsible for growing and maintaining 10 accounts focusing in the healthcare and manufacturing verticals; acting as
                the liaison between the account and TEKsystems’ IT services and functional role offerings. Essential duties of the job
                included:`
            ],
            skillset: "yes",
            skill_title: "",
            listofskills: [
                `Fostering and growing relationships with key stakeholders including Individual Contributors, Managers,
                Directors, and C-suite Executives.`,
                `Partnering with key stake holders to understand business drivers and present the best solution to help
                resolve pain points as well as supporting TEKsystems financial goals by including TEK Global Solutions in
                solution offering.`,
                `Working with accounts to offer the best staffing augmentation solutions for IT services and Functional roles.`,
                `Bringing value to accounts by researching IT trends and educating partners using the most current data on the market.`
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
                `As the Physician Relations Manager for both Upper Valley Medical Center (Troy, OH) and Miami Valley Hospital North
                (Dayton, OH.) I was responsible for establishing and growing strategic relationships between physicians and
                hospital/system administration. Summary of experiences include:`
            ],
            skillset: "yes",
            skill_title: "",
            listofskills: [
                `Setting up the process for onboarding of new providers to Premier Health. Leading the collaboration between
                invested departments to ensure new provider(s) will be able to start treating patients on time and with minimal
                interruptions.`,
                `Provided timely, effective, and professional communication of the progress of each project with the appropriate
                hospital leadership.`,
                `Coordinating with team members for preparation and facilitation, documentation of decisions, up-to-date
                documentation of task completion, and ongoing communication to monitor assignments including using Microsoft
                Teams to ensure appropriate follow up. `,
                `Providing leadership, guidance and direction to new managers, providers, and staff in transitioning offices.`,
                `Supported a variety of projects including creation and launching Premier Ortho Urgent Care and Premier Blood
                and Caner Center - Troy, OH location.`
            ],
        },
        {
            img_logo: "./jobs/novo.png",
            img_alt: "NovoNordisk, LLC",
            img_style:  '',
            jobtitle: "Senior Diabetes Sales Specialist",
            company: "NovoNordisk, LLC",
            dates: "Nov 2010 - Jan 2021",
            job_description: [
                `Worked entire Dayton-Metro and surrounding areas to efficiently promote Novo Nordisk’s entire Diabetes Portfolio (4 diabetes medications.) Successfully launched 3 blockbuster Diabetes therapies.`
            ],
            skillset: "yes",
            skill_title: "",
            listofskills: [
                "Winner of Area Circle of Excellence (COE) Award, exclusively given to Top 10% - 13% of company’s highest achievers.", 
                "Partnered with key stakeholders within both hospital affiliated and non-hospital affiliated health systems, creating strong partnerships through account-based selling, which helped increase office access, market share, and volume in respective accounts.",
                "Expertly trained medical office staff in diabetic solutions with a focus on medical injectable/device usage and diabetes education, resulting in greater provider access and uptake of Novo Nordisk’s Diabetes Portfolio.",
                "Collaborated and partnered with internal decision makers of independent practices and key offices to implement initiatives, increasing growth of Diabetes Portfolio as well as helping practices meet quality / patient wellness outcome goals.",
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
                "Promoted AstraZeneca’s Cardiovascular, GI, and Metabolic product lines with 8 products. Successfully launched 3 blockbuster Cardiovascular and Diabetes therapies."
            ],
            skillset: "yes",
            skill_title: "",
            listofskills: [ 
                "Rated in Top 5% of Area when launching Onglyza, Crestor, and Pulmicort Respules new products.",
                "Developed and implemented new business opportunities for Dayton District (10 representatives) by serving as Dayton District Business Analyst, researching and conveying insights regarding portfolio opportunities, market dynamics, and the competitive environment.",
                "Winner Nexium Purple Pinnacle Award – This is awarded to teams that reached a milestone of having a 50% market share or greater.",
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
                "Managed the daily operations of OrthoNeuro’s multiple medical practice locations. Duties included:",
            ],
            skillset: "yes",
            skill_title: "",
            listofskills: [
                "Managed the workflow of 61 Full Time Equivalents at four offices",
                "Functioned as the liaison between OrthoNeuro and the Orthopedic and Neurological Institute, a collaboration between OrthoNeuro and Ohio Health’s Doctors’ Hospital North.",
                "Responsible for the daily operations of OrthoNeuro’s ancillary services including OrthoNeuro’s Center for Physical Therapy.",
                "Assisted in the development of the operational plan for OrthoNeuro’s Center of Imaging. The Center for Imaging was OrthoNeuro’s MRI facility.",
                "Improved and implemented the organization’s entire human resource structure including the practice’s policies and procedures and employee handbook.",
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