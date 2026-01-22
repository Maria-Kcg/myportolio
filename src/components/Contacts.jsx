import { Mail, Linkedin, MessageCircleMore, Handshake } from 'lucide-react';
import Title from './Title';

const contacts = [
    {
        icon: <Mail size={24} />, link: "mailto:kpechegomariegrace@gmail.com",
        name: "Email", color: "bg-red-500"
    },
    {
        icon: <Linkedin size={24} />,
        link: "https://www.linkedin.com/in/marie-gr%C3%A2ce-kpechego-775140279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "LinkedIn", color: "bg-blue-600"
    },
    {
        icon: <MessageCircleMore size={24} />, link: "https://wa.me/2290166446006",
        name: "WhatsApp", color: "bg-green-500"
    }
];

const Contacts = () => {
    return (
        <>
            <section id="contacts">
                <div className="bg-[#F3ECE6] py-10 px-[10%] text-center border-t border-[#D6A77A50]">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-[#2B1E18] mb-3">Restons en contact</h2>
                        <p className="text-[#8B6B5A] text-lg">N'hésitez pas à me contacter pour toute collaboration</p>
                    </div>

                    <div className="flex items-center justify-center gap-8">
                        {
                            contacts.map((contact, index) => (
                                <div key={index} className='group'>

                                    <a href={contact.link} target='_blank'
                                        className={`flex items-center justify-center gap-3 px-6 py-4 ${contact.color} text-white rounded-full font-semibold 
                                         shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:-translate-y-1 md:w-20 lg:w-35
                                        `}>
                                        {contact.icon}
                                    </a>
                                    
                                    <p className="absolute hidden group-hover:block shadow shadow-[#D6A77A] text-sm px-2 py-1 bg-white rounded mt-1 lg:ml-8">
                                        {contact.name}
                                    </p>
                                </div>
                            ))
                        }
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-[#8B6B5A] flex items-center justify-center gap-2">
                            <Handshake size={16} className="animate-pulse" />
                            Disponible pour tout projet, opportunité et collaborations.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts;