import React from 'react';
import { motion } from 'framer-motion'
//import { Link } from 'react-router-dom'

//sfc: stateless functional comp (shortcut)
import tie from '../images/tie.svg'
import linkedin from '../images/linkedin.svg'
import facebook from '../images/facebook.png'
import max from '../images/se.jpg'
import pin from '../images/pin.svg'
import github from '../images/github.svg'
import resume from '../resume.doc'
const SideBar = () => {
    var sidebarVariants = {
        initial: {
            x: '-10vw',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.5, type: 'spring' }
        }
    }
    const handleSentEmail = () => window.open('mailto:imsahilpatel1111@gmail.com');
    // const changeMode = () => {
    //     document.querySelector('.')
    // }

    return (

        <motion.div className="sideBar_custom"
            variants={sidebarVariants}
            initial='initial'
            animate='visible'
        >
            <img src={max} alt="avatar" className="rounded-circle image_custom" />
            <h3 className='name'><span>Sahil</span> Patel</h3>
            <div className="title bg-gray side_item">Fullstack Developer</div>
            <a href={resume} download="resume.doc">
                <div className="cv side_item"><img src={tie} alt="resume" className='icon_small' /> Download Resume</div></a>
            <figure className='social_icons'>
                <a href="https://www.facebook.com/sahil.sakhiya" target="_blank"><img src={facebook} alt="facebook" className='icon_small social_icon' /></a>
                <a href="https://www.linkedin.com/in/sahil-patel-52960b15a" target="_blank"><img src={linkedin} alt="linkedin" className='icon_small social_icon' /></a>
            </figure>
            <div className="contact">
                <div className="location side_item"><img src={pin} alt="pin" className='icon_small  mr-1' />  Toronto</div>
                <a href="https://github.com/sahilsakhiya11/" target="_blank"><div className="github side_item"> <img src={github} alt="git" className='icon_small social_icon mr-1' />  github </div></a>
                <div className="email_id side_item"> imsahilpatel1111@gmail.com </div>
                <div className="phone side_item"> +1 437-982-2407 </div>

            </div>

            <div className="email side_item mt-6" onClick={handleSentEmail}> Email Me </div>
            {/* <div className="mode"><button className='btn' onClick={changeMode}>mode</button></div> */}
        </motion.div >


    )
}

export default SideBar;