import React from 'react';
import { motion } from 'framer-motion';

const Project = ({ project }) => {
    const { name, type, image, description, links } = project;
    return (
        <motion.div
            whileHover={{ translateY: -15 }}
            whileTap={{ scale: 1.05 }}
            className="card bg-base-100 shadow-xl">
            <img src={image} alt="Shoes" />
            <div className="card-body">
                <div className='mb-5'>
                    <h2 className="card-title text-3xl mb-5">{name}</h2>
                    <p className='badge h-auto badge-outline'>{type}</p>
                </div>
                <p className='leading-relaxed mb-5'>{description}</p>
                <div className="card-actions grid grid-cols-1">
                    {
                        links.map(link => <a key={link.id} className="btn btn-sm btn-outline" href={link.url} target="_blank"><div>{link.title}</div></a>)
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default Project;