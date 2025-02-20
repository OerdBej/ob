import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import { MdOutlineBadge } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PROFILE_DATA } from '../utils/data';
import { FaBook } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

import PROFILE_PIC from '../assets/profile-pic-1.png';

const Hero = () => {
  const {
    name,
    tagline,
    jobTitle,
    yearsOfExperience,
    location,
    email,
    skills,
  } = PROFILE_DATA;

  return (
    <section
      className='max-w-screen-xl flex flex-col gap-14 md:flex-row md:items-center pt-16 md:pt-28 pb-20 px-6 mx-auto'
      id='hero'
    >
      <div className='flex-1 text-center md:text-left z-[1]'>
        <span className='text-xs md:text-sm text-blue-200 font-thin'>
          Be curious. Read widely. Try new things. 🎈
        </span>

        <h2 className='text-3xl mt-3 md:text-5xl md:mt-5'>
          {name} 👋
        </h2>

        <p className='w-full text-xs font-light text-neutral-50 leading-5 my-6 lg:w-[38vw] md:text-sm md:leading-6 md:my-8'>
          {tagline}
        </p>

        <div className='flex space-x-4'>
          <button className='bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded'>
            <a
              href='https://oerdbej.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Show Case 📂
            </a>
          </button>

          <button className='bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded'>
            <a
              href='https://slowcoding.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Slow Reading
            </a>
          </button>
        </div>
      </div>

      <div className='flex gap-2 justify-center md:gap-3 lg:gap-5 z-[1]'>
        <div className='w-[403px] bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-950 p-6'>
          {/* here for the rectangular colors */}
          <div className='flex gap-2 justify-center md:gap-3 lg:gap-5 z-[1]'>
            <div className='w-[403px] bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-950 p-6'>
              <div className='flex items-center justify-center'>
                <div className='relative p-[3px] bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 rounded-full'>
                  <div className='bg-white rounded-full p-1'>
                    <img
                      className='hero-img rounded-full'
                      src={PROFILE_PIC}
                      alt='img one'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-cardbg rounded-md text-center mt-3 p-4'>
            <h5 className='text-sm md:text-base text-white'>
              {name}
            </h5>
            <p className='text-slate-500 text-xs md:font-medium mt-1'>
              {jobTitle}
            </p>

            <div className='flex items-center justify-center gap-2 text-slate-500 text-xs mt-1'>
              <HiOutlineLocationMarker />
              <p className='font-medium'>{location}</p>
            </div>
          </div>
          <InfoTile
            icon={<FiMail size={20} className='text-sky-400' />}
            text={email}
          />
          <InfoTile
            icon={
              <MdOutlineBadge size={22} className='text-sky-400' />
            }
            text={`${yearsOfExperience} Years of Experience`}
          />
          <div className='flex items-center gap-2 flex-wrap my-3'>
            {skills.map((item) => (
              <div
                key={item}
                className='text-[11px] bg-blue-800/30 rounded md:text-xs px-3 py-1 '
              >
                {item}
              </div>
            ))}
          </div>
          {/* icons of the hero section */}
          <div className='flex items-center gap-2 flex-wrap'>
            <div className='bg-blue-800/30 p-2 rounded'>
              <a
                href='https://github.com/OerdBej'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub className='text-lg md:text-xl' />
              </a>
            </div>
            <div className='bg-blue-800/30 p-2 rounded'>
              <a
                href='https://www.linkedin.com/in/oerdbej/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            <div className='bg-blue-800/30 p-2 rounded'>
              <a
                href='https://www.goodreads.com/user/show/58869139-oerd-bej'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaBook size={20} />
              </a>
            </div>
            <div className='bg-blue-800/30 p-2 rounded'>
              <a
                href='https://slowcoding.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGlobe size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='ui-circle absolute top-6 md:top-10 -left-10 md:left-0'></div>
    </section>
  );
};

export default Hero;

const InfoTile = ({ icon, text }) => {
  return (
    <div className='flex items-center gap-4 bg-cardbg p-4 mt-3 rounded-md'>
      {icon}
      <p className='text-xs md:text-sm font-normal'>{text}</p>
    </div>
  );
};
