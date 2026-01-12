import { Mail } from 'lucide-react';
import photo from "..//assets/images/photo.jpg";

const Home = () => {
    return (
        <>
            <section id="accueil" >
                <div className="flex flex-col-reverse md:flex-row md:gap-20 lg:gap-50 justify-center items-center bg-[#F7F2EE]
                   py-10 md:py-30 px-[10%]">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left text-[#2B1E18]">
                            Bonjour, <br /> je suis {" "}
                            <span className="text-[#5C4033]">Marie-Grâce</span>
                        </h1>
                        <p className="my-4 text-lg text-center md:text-left ">Je suis une développeuse frontend. Contactez-moi si vous avez besoin de mes services.</p>
                        <a href="mailto:kpechegomariegrace@gmail.com" target='_blank'
                            className='flex items-center justify-center p-3 gap-1 bg-[#D6A77A] rounded md:text-left 
                            text-[#2B1E18] md:w-fit hover:text-[#D6A77A] hover:bg-[#5C4033] duration-500 font-medium'>
                            <Mail size={16} />
                            Contactez-moi
                        </a>
                    </div>
                    <div className="mb-10 md:mb-0">
                        <img src={photo} alt="ma photo" className='w-50 h-50 md:w-90 md:h-90 border-8 border-[#D6A77A] object-cover object-top
                        shadow-xl img-rounded' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;