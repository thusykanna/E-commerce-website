import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className='my-10 flex -flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Best Choice was born out of a passion for innovation and a vision to revolutionize the way people shop online. What started as a simple idea—to create a platform where customers can easily discover, explore, and purchase a wide variety of products from the comfort of their homes—has grown into a trusted shopping destination loved by many.
          </p>
          <p>
            Since our inception, we have worked tirelessly to curate a diverse collection of high-quality products that cater to every style, taste, and preference. Whether it’s fashion and beauty, electronics and gadgets, or home and lifestyle essentials, Best Choice ensures that every product is sourced from reliable brands and trusted suppliers, giving our customers both value and peace of mind.
          </p>
          <p>
            At Best Choice, we believe shopping should be more than just a transaction—it should be an experience. That’s why we focus on seamless navigation, secure payments, timely delivery, and exceptional customer service. We’re here not only to meet customer needs but to exceed expectations at every step.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission at Best Choice is to empower customers with choice, convenience, and confidence. We are dedicated to transforming online shopping into a smooth, enjoyable, and trustworthy journey. From the moment you browse our store to the time your order arrives at your doorstep, we ensure excellence, reliability, and satisfaction.
          </p>
          <p>
            With Best Choice, you don’t just shop—you discover a world of endless possibilities.
          </p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Execeptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
