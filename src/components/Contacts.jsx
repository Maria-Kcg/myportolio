import { Mail, Linkedin, MessageCircleMore } from 'lucide-react';

const contacts = [
    { icon: <Mail />, link: "mailto:kpechegomariegrace@gmail.com", name: "Email" },
    { icon: <Linkedin  />, link: "https://www.linkedin.com/in/marie-gr%C3%A2ce-kpechego-775140279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", name: "LinkedIn" },
    { icon: <MessageCircleMore />, link: "https://wa.me/2290166446006", name: "WhatsApp" }
];

const Contacts = () => {
    return (
        <>
            <section id="contacts">
                <div className="bg-[#F3ECE6] py-10 px-[10%] text-center border-t border-[#D6A77A50]">
                    <div className="flex items-center justify-center gap-5">
                        {contacts.map((contact, index) => (
                            <div key={index} className='group'>
                                <a href={contact.link} target='_blank' className='text-[#5C4033] font-bold hover:text-[#D6A77A] group'>
                                    {contact.icon}
                                </a>
                                <p className="absolute hidden group-hover:block shadow shadow-[#D6A77A] text-[#D6A77A] px-2 py-1 -ml-4 bg-white rounded mt-1">{contact.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts;