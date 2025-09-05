import home_folder from '../assets/images/home-folder.svg'
import about_folder from '../assets/images/about-folder.svg'
import skills_folder from '../assets/images/skills-folder.svg'
import projects_folder from '../assets/images/projects-folder.svg'

import home_file from '../assets/images/home-file.svg'
import about_file from '../assets/images/about-file.svg'
import skills_file from '../assets/images/skills-file.svg'
import projects_file from '../assets/images/projects-file.svg'

const Menu = ({ activeMenu, setActiveMenu}) => {
    return (
        <div className="text-copper font-philosopher lg:h-full h-fit lg:absolute lg:right-[60px] lg:p-0 pt-2 lg:w-[200px]">  
            <div className="flex lg:flex-col flex-wrap items-center lg:justify-center justify-between lg:text-4xl text-xl h-full lg:gap-2 lg:p-0 px-3">
                <button onClick={() => setActiveMenu("Home")} className="flex flex-col gap-1 items-center w-fit">
                    <img className='lg:w-auto h-auto w-14' src={activeMenu === 'Home' ? home_file : home_folder} alt="" />
                    <p className={activeMenu === 'Home' ? 'font-bold' : ''}> home </p>
                </button>
                <button onClick={() => setActiveMenu("About")} className="flex flex-col gap-1 items-center w-fit">
                    <img className='lg:w-auto h-auto w-14' src={activeMenu === 'About' ? about_file : about_folder} alt="" />
                    <p className={activeMenu === 'About' ? 'font-bold' : ''}> about </p>
                </button>
                <button onClick={() => setActiveMenu("Skills")} className="flex flex-col gap-1 items-center w-fit">
                    <img className='lg:w-auto h-auto w-14' src={activeMenu === 'Skills' ? skills_file : skills_folder} alt="" />
                    <p className={activeMenu === 'Skills' ? 'font-bold' : ''}> skills </p>
                </button>
                <button onClick={() => setActiveMenu("Projects")} className="flex flex-col gap-1 items-center w-fit">
                    <img className='lg:w-auto h-auto w-14' src={activeMenu === 'Projects' ? projects_file : projects_folder} alt="" />
                    <p className={activeMenu === 'Projects' ? 'font-bold' : ''}> projects </p>
                </button>
            </div>
        </div>
    )
}

export default Menu