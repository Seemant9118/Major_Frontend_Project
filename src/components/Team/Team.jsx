import React from 'react'
import Card from '../../Utilities/Card/Card'
import './Team.css';
import seemantProfile from '../../asserts/seemant.jpeg';

const Team = () => {
    const TeamDetails = [
        {
            id: 1,
            name: "Aditya Singh Rawat (Frontend Developer)",
            about: "ksbd iudbf bdisf hbd dsb sidbf db sdfb dh ",
            img: "kbk",
            socialLinks: ["Sad", "Da", "SAd"]
        },
        {
            id: 2,
            name: "Prateek Jaiswal (UI/UX Designer)",
            about: "ksbd iudbf bdisf hbd dsb sidbf db sdfb dh ",
            img: "kbk",
            socialLinks: ["Sad", "Da", "SAd"]
        },
        {
            id: 3,
            name: "Priyanshi Srivastava (Frontend Developer)",
            about: "ksbd iudbf bdisf hbd dsb sidbf db sdfb dh ",
            img: "kbk",
            socialLinks: ["Sad", "Da", "SAd"]
        },
        {
            id: 4,
            name: "Rakhshan Ahmad (Full Stack Developer)",
            about: "ksbd iudbf bdisf hbd dsb sidbf db sdfb dh ",
            img: "kbk",
            socialLinks: ["Sad", "Da", "SAd"]
        },
        {
            id: 5,
            name: "Seemant Kamlapuri (Full Stack Developer)",
            about: "ksbd iudbf bdisf hbd dsb sidbf db sdfb dh ",
            img: seemantProfile,
            socialLinks: ["Sad", "Da", "SAd"]
        },

    ]
    return (
        <>
            <h1 className='team-heading'>Our Team</h1>
            <div className='cards-container'>

                {
                    TeamDetails.map((user) => {
                        return (
                            <Card key={user.id} name={user.name} about={user.about} img={user.img} socialLinks={user.socialLinks} />
                        )
                    })
                }
            </div>
        </>

    )
}

export default Team