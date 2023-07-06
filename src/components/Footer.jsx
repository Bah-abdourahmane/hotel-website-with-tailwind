import React from 'react'
import LogoWhite from "../assets/logo-white.svg";

const Footer = () => {
  return (
    <div className='bg-primary py-12'>
      <div className='container mx-auto text-white flex flex-col md:flex-row gap-5 justify-between items-center'>
        <img src={LogoWhite} alt=""  />
        <span>Copyright &copy; 2023. All rights reserved</span>
      </div>
    </div>
  )
}

export default Footer
