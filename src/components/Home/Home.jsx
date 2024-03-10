import React from 'react'
import './Home.css'
import logo from '../../assets/logoblack.png'
import img1 from '../../assets/img5.jpg'

const Home = () => {
  return (
    <div>
      <div className="home__container">
        <div className="home__left">
          <div className="homelogo">
            <span className='wel__text'> Welcome to</span>
            {/* <img src={logo} alt="" /> */}
          </div>

          <span className='company__name'>
            MS EarthBounty
          </span>
          <span className='stroke-text company__subline'>
            Where Tradition Meets Sustainability
          </span>
          <div className="home__tagline">
            Organically Grown, Nature-Approved - Direct from Mugur Farmer, Mysore
            🌿 Join Our Journey:
            Explore the world of MS EarthBounty and discover the taste of genuine, farm-to-table goodness. Your journey to healthier, tastier rice begins here.
          </div>
          
      <div className="blur hero-blur"></div>
          <div >
            <button className="watch__button">Take a Tour</button>
          </div>
        </div>
        <div className="home__right">
          <img src={img1} alt="" />
        </div>
      </div>
      <div>

        {/* About Us Section
        "MS EarthBounty: Rooted in Tradition, Growing for Tomorrow. As a dedicated farmer from Mugur, Mysore, I, Madhusudhan, am proud to bring you the finest organic rice and bananas. Cultivated with age-old wisdom and modern sustainable practices, our products are a testament to the purity of nature and the hard work of local farmers."
        Featured Products
        Organic Aged Rice: "Savor the richness of our 6-month aged rice. Cultivated organically, each grain promises a burst of natural flavor and unparalleled quality."
        Organic Bananas: "Experience the true taste of bananas. Grown without haste and without waste, our bananas are a pledge to your health and our planet's wellbeing."
        Why Choose Us
        "Choosing MS EarthBounty means supporting sustainable agricultural practices and ensuring that your family enjoys the purest, most nutritious produce. Our commitment to organic farming ensures that every product from our fields to your fork is free from harmful chemicals, and rich in tradition and taste."
        Testimonials or Reviews
        "Our customers speak for us: 'The taste of MS EarthBounty's rice takes me back to my childhood,' says [Customer Name], a loyal patron."
        "Discover why families are choosing MS EarthBounty for their daily nutrition."
        Call to Action (CTA)
        "Dive into the Bounty of Earth: Shop Now"
        "Join Our Journey: Subscribe for Updates and Exclusive Offers"
        Contact Information
        "Got Questions? We’re Here to Help! Reach out to us at [email/phone]. Or visit us at our farm in Mugur, Mysore, for a slice of nature’s best."
        Social Media Links
        "Follow Us on Our Journey: Connect with MS EarthBounty on [social media platforms] for the latest updates, behind-the-scenes, and more."
        Blog or News Section (Optional)
        "From Our Fields to Your Table: Read the Latest on Organic Farming and Healthy Eating on Our Blog." */}
      </div>

    </div>
  )
}

export default Home
