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
            dates: "Sept 2022 - July 2024",
            job_description: [
                `Responsible for growing and maintaining 10 accounts focusing in the healthcare and manufacturing verticals; acting as
                the liaison between the account and TEKsystems’ IT services and functional role offerings. Essential duties of the job
                included:`
            ],
            skillset: "no",
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
            dates: "Nov 2012 - Dec 2021",
            job_description: [
                `Award winning pharmaceutical sales representative that successfully promoted Novo Nordisk’s entire Diabetes Portfolio
                4 diabetes medications.)`
            ],
            skillset: "yes",
            skill_title: "",
            listofskills: [
                `Led the strategy for launching three blockbuster drugs by developing a plan for identifying stakeholders, tracking
                results, and adapting changes as needed.`
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
                `Successfully promoted AstraZeneca’s Cardiovascular, GI, and Metabolic product lines with 8 products. Successfully launched 3 blockbuster Cardiovascular and Diabetes therapies.`
            ],
            skillset: "yes",
            skill_title: "",
            listofskills: [ 
                "Led the strategy for launching three blockbuster drugs by developing a plan for identifying stakeholders, tracking results, and adapting changes as needed."
            ]
        },
        {
            img_logo: "./jobs/ortho.png",
            img_alt: "OrthoNeuro Logo",
            img_style:  '',
            jobtitle: "Director of Operations",
            company: "OrthoNeuro",
            dates: "",
            job_description: [
                `While an Operations Manager working at a variety of ambulatory facilities and with over 10 years’ experience in the
                efficient management of various multi-specialty practices, I was the project manager for each practice. Summary of
                experiences include:`
            ],
            skillset: "yes",
            skill_title: "",
            listofskills: [
                `Researching local national and local market trends to support recommended new business ventures for
                capital investment consideration. This included investing in rehabilitation services as well as time-share
                for MRI services.`,
                `Working with variety of stakeholders to successfully implement, monitor, and adapt programs/projects to
                ensure success including leading two full medical records and revenue cycle computer conversions. This
                also included working with internal stakeholders and external vendors to keep the project on time, on
                schedule, and on budget.`,
                `Regularly met with C-suite Executives to present project/program progression and incorporate any
                suggestions into project.`,
                `Strategic planning and project management including IT support, asset acquisitions, and provider
                relations. Led the team to that was responsible for opening 3 satellite offices.`
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
                ``,
                ``,
                ``
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
            img_logo: "./jobs/cardio.png",
            img_alt: "Cardiology Associate of Cincinnati Inc. Logo",
            img_style:  '',
            jobtitle: "Operations Manager",
            company: "Cardiology Associate of Cincinnati Inc. (absorbed by TriHealth)",
            dates: "2016 - PRESENT",
            job_description: [
                ``,
                ``,
                ``
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
            img_logo: "./jobs/medisync.png",
            img_alt: "Medisync Logo",
            img_style:  '',
            jobtitle: "Consultant",
            company: "Medisync (now PriMed)",
            dates: "1998 - 2000",
            job_description: [
                ``,
                ``,
                ``
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
            jobtitle: "Strategic Planning",
            company: "Flower Hospital",
            dates: "",
            job_description: [
                ``,
                ``,
                ``
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
            jobtitle: "Adminstrative Intern",
            company: "ProMedica Health Systems",
            dates: "",
            job_description: [
                ``,
                ``,
                ``
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
            jobtitle: "Volunteer",
            company: "Shoe the Shoeless",
            dates: "",
            job_description: [
                ``,
                ``,
                ``
            ],
            skillset: "no",
            skill_title: "",
            listofskills: ["", ""]
        },

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