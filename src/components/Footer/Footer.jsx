import React from 'react'
import './Footer.css'
import youtubeIcon from '../../assets/youtube_icon.png'
import twitterIcon from '../../assets/twitter_icon.png'
import instagramIcon from '../../assets/instagram_icon.png'
import facebookIcon from '../../assets/facebook_icon.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtubeIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={facebookIcon} alt="" />

      </div>
      <ul>
        <li>
          Audio Description
        </li>
        <li>
          Help Center
        </li>
        <li>
          Gift Cards
        </li>
        <li>
         Media Center
        </li>
        <li>
         jobs
        </li>
      </ul>
      <p className='copyright-text'> copy right netflix .Inc</p>
    </div>
  )
}

export default Footer