import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Footer = ()=>{
    return (
        <>
        <div className="flex mt-10 bg-gradient-to-t from-[#000000d2] to-[#0000003e] h-[35vh]">
            <div className='mt-8'>
                {/* Email */}
                <div className='pl-28 pt-4'>
                    <a href="mailto:jangidyogesh123@gmail.com" className='flex flex-row items-center'>
                        <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                        <h1 className='pl-4'>Email : jangidyogesh123@gmail.com</h1>
                    </a>
                </div>
                
                {/* LinkedIn */}
                <div className='pl-28 pt-6'>
                    <a href="https://www.linkedin.com/in/yogesh-sharma-45201b231/" className='flex flex-row items-center'>
                        <FontAwesomeIcon icon={faLinkedin} className="text-white" />
                        <h1 className="pl-4">LinkedIn</h1>
                    </a>
                </div>
            </div>
           
            <div className='mt-8 pl-10'>
                {/* Twitter */}
                <div className='pl-28 pt-4'>
                    <a href="https://x.com/yogesharma2003" className='flex flex-row items-center'>
                        <FontAwesomeIcon icon={faXTwitter} className="text-white" />
                        <h1 className="pl-4">Twitter</h1>
                    </a>
                </div>
            
                {/* Github */}
                <div className='pl-28 pt-6'>
                    <a href="https://github.com/Jangidyogesh12" className='flex flex-row items-center'>
                        <FontAwesomeIcon icon={faGithub} className="text-white" />
                        <h1 className='pl-4'>Github</h1>
                    </a>
                </div>    
            </div>
            
            
            
            
        </div>
        </>
    )
}

export default Footer