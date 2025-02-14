import React from 'react';

interface AboutCartProps {
    title: string;
    desc: string;
}

const AboutCard: React.FC<AboutCartProps> = ({title, desc}) => {
    return (
        <div className="text-center border-2 border-softRed p-10">
            <h1 className="font-lanche text-3xl text-darkPink">{title}</h1>
            <p className="font-argentum-regular text-softRed mt-4">{desc}</p>
        </div>
    );
};

export default AboutCard;
