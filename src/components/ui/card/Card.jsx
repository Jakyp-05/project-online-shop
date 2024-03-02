import React from 'react'
import Star from '../../../data/star'

function Card() {
  return (
    <div className='card'>
        <div className='card-image'>
            <img className='image' src="https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OEX-imLKeGoKNtWTfbgojxqQXfDmSnop~NTsek6dQ-4mnkNi64A~~u~f0H-tApWmHKpuQb5aty4KRG-msx1kwcdalz--a~nAHeXSMVtldLhm3e8orcolifiETGkiFhLVRbx-vycednMEXKILZY2QW6fSfOMfQVPMHma8DJVSl1XCrYktU7m-EvMe3Exoa7VyIcxseBc8CK-bZhuyUUZwZWVwX1AYlZXCI65olIOxIP9t~r9EVuMNVy-0ha1MFmptFS9mGMRjsTwOOzmNZB7Xqi28zw6H0uFWCKiakoNjayAnsX868BcOzTaPqEJUr-YjsvDdEc7SRG8qVkU7JDKz~w__" alt="" />
            <div className='card-icons'>
                <div className='icon'>
                    <svg width="24" height="22" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z" stroke="black" strokeWi dth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className='icon'>
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>  
                </div>
            </div>
            <div className='card-promo'>-40%</div>
            <button className='card-btn'>Add to cart</button>
        </div>
        <div className='card-title'>
            <div className='card-title-name'>HAVIT HV-G92 Gamepad</div>
            <span>$120 <strong>$160</strong></span>
            <div className='stars'>
				{[1, 2, 3, 4, 5].map((star, index) => (
					<Star key={index} fill={star <= 4 ? '#FFAD33' : 'gray'} />
				))}
			</div>
        </div>
    </div>
  )
}

export default Card