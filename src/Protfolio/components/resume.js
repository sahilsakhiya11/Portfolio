import React from 'react';
import react from '../images/react.svg'

import { motion } from 'framer-motion'
import { skill_language_store, skill_tool_store } from './skillStore'

const SkillWrapper = ({ name, level, icon }) => {
    var className = 'skill'

    if (level === 'beg')
        className = `${className} skill_beg`
    if (level === 'avg')
        className = `${className} skill_avg`
    else if (level === 'verygood')
        className = `${className} skill_verygood`
    else if (level === 'exp')
        className = `${className} skill_exp`
    if (!icon) {
        icon = react
    }
    return (
        <div className="skill_wrapper">
            <div className={className}>
                <span className="skill_name"><img src={icon} alt="python" className='icon_tiny mr-2' />   {name}</span>
                <span className='skill_level'></span>
            </div>
        </div>
    )
}
const Resume = () => {
    const resumeVariants = {
        initial: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1, duration: 0.7
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }



    return (

        <motion.div className="container resume_section"
            variants={resumeVariants}
            initial='initial'
            animate='visible'
            exit='exit'>

            <div className="row">
                <div className="col-12 col-lg-6 resume_card">
                    <div className="sub_heading">
                        Education
                    </div>
                    <div className="resume_card_body">
                        <div className='resume_card_title'><h5>Information Technology Solutions</h5></div>
                        <div className='resume_card_year'> Post Graduation Diploma (2020-2021)</div>
                        <p className='resume_card_description'>
                            I've completed my Bachelor of Engineering in Information Technology back in India and now I recently graduated from Post Graduation Program in Humber College in Toronto,Ontario.
                        </p>
                        <p>Percentage:- 84%</p>

                    </div>
                </div>
                <div className="col-12 col-lg-6 resume_card">
                    <div className="sub_heading">
                        Experience
                    </div>
                    <div className="resume_card_body">
                        <div className='resume_card_title'><h5>Senior Web Developer</h5></div>
                        <div className='resume_card_year'><a href="https://www.tvo.org/" target="_blank">TVO - Toronto (Oct'21 - Present)</a></div>
                        <hr/>
                        <div className='resume_card_title'><h5>Full Stack Developer</h5></div>
                        <div className='resume_card_year'><a href="https://www.excelsiortechnologies.com/" target="_blank">Excelsior Technologies - India (Aug'18 - Dec'20)</a></div>
                        <hr/>
                        <div className='resume_card_title'><h5>Full Stack Engineer - Intern</h5></div>
                        <div className='resume_card_year'><a href="http://ignite.silveroakuni.ac.in/" target="_blank">Ignite Technologies - India (Jul'17 - Jun'18)</a></div>
                        <hr/>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6 skill_div">
                    <div className="sub_heading">
                        Language & Framework
                    </div>
                    <div className="resume_card_body">
                        {skill_language_store.map((skill, i) => <SkillWrapper key={i} name={skill.name} level={skill.level} icon={skill.logo} />)}

                    </div>


                </div>
                <div className="col-12 col-lg-6">
                    <div className="sub_heading">
                        Tools & Software
                    </div>
                    <div className="resume_card_body">
                        {skill_tool_store.map((skill, i) => <SkillWrapper key={i} name={skill.name} level={skill.level} />)}


                    </div>
                </div>
            </div>
        </motion.div>

    );
}

export default Resume;
