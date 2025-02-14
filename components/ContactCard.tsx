import React from 'react';

interface ContactCardProps {
    title: string;
    imageSrc: string;
    contact: string;
}

const ContactCard: React.FC<ContactCardProps> = (props) => {
    return (
        <div
            className="
        border 
        items-center 
        p-0 md:p-8
        pr-4 md:pr-8
        pl-4 md:pl-8
        pt-4 md:pt-8
        pb-4 md:pb-8
        w-52 md:w-52 
        flex 
        flex-row md:flex-col
        ">

            <h1 className="font-lanche text-3xl hidden md:block">{props.title}</h1>
            <img src={props.imageSrc} alt="" className="mx-auto  w-8 md:w-12 md:mt-8"/>
            <p className="text-sm md:mt-8 md:text-base">{props.contact}</p>
        </div>
    )
}

export default ContactCard;
