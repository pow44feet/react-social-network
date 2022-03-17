import './About.css';
import Icons from '../icons/Icons';

const About = () => {
   return (
      <div className="page__about about">
         <p className="about__title">
            Profile Intro
         </p>
         <div className="about__content">
            <span className="about__header">
               About Me:
            </span>
            <p className="about__text">
               Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56.
            </p>
            <span className="about__header">
               Technology stack:
            </span>
            <p className="about__text">
               HTML, CSS, JavaScript, JQuery, React, PHP, MySQL, ModX
            </p>
            <span className="about__header">
               Other Social Networks:
            </span>
            <ul className="about__social-list">
               <li className="about__social-item">
                  <a className="about__social-link about__social-link--vk">
                     <Icons 
                        name='vk'
                        size='32'
                        className='about__social-icon--vk'
                     />
                     <span>
                        Vkontakte
                     </span>
                  </a>
               </li>
               <li className="about__social-item">
                  <a className="about__social-link about__social-link--github">
                     <Icons 
                        name='github'
                        size='32'
                        className='about__social-icon--vk'
                     />
                     <span>
                        Github
                     </span>
                  </a>
               </li>
               <li className="about__social-item">
                  <a className="about__social-link about__social-link--codepen">
                     <Icons 
                        name='codepen'
                        size='32'
                        className='about__social-icon--vk'
                     />
                     <span>
                        Codepen
                     </span>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default About;