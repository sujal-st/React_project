// import HeroImage from "../assets/herosection-img.jpg"
import Carousel from './carousel.jsx'
import Logo from './brans.jsx'

function Hero() {

    return (
        <div className='h-full'>

            <div className="hero flex flex-row w-full">
                <div className="hero-left flex flex-col justify-center items-start gap-6">

                    <h1 className="style-h title font-bold">Unlock Your Potential</h1>

                    <div className="font-semibold subtitle">The intuitive platform where skill-building meets career advancement.</div>

                    <div className="flex flex-col gap-4">

                        <div>Interactive courses, transparent paths, and everything you need to achieve your goals-all in one place.</div>
                        <div className="flex flex-row justify-start gap-3">
                            <button className="btn-primary">Get Started</button>
                            <button className="btn-secondary">See Pricing</button>
                        </div>
                    </div>
                </div>
                <div className="hero-right flex flex-col items-center justify-center">
                    <div className="container-rt">
                        <Carousel />
                    </div>
                </div>
            </div>


            <div className="overflow-hidden bg-gray-50 py-4 logo-slider1">
                <div className="flex w-max gap-16 logo-slider">
                    {/* Row 1 */}
                    <img src="/assets/React.png" className="h-16" />
                    <img src="/assets/Java.png" className="h-16" />
                    <img src="/assets/next-js.png" className="h-16" />
                    <img src="/assets/Python-Logo.png" className="h-16" />
                    <img src="/assets/tailwind-css-logo-vector.png" className="h-16" />
                    <img src="/assets/html.png" className="h-16" />
                    <img src="/assets/django.png" className="h-16" />
                    <img src="/assets/bootstrap.png" className="h-16" />

                    {/* Row 2 (duplicate for seamless loop) */}
                    <img src="/assets/React.png" className="h-16" />
                    <img src="/assets/Java.png" className="h-16" />
                    <img src="/assets/next-js.png" className="h-16" />
                    <img src="/assets/Python-Logo.png" className="h-16" />
                    <img src="/assets/tailwind-css-logo-vector.png" className="h-16" />
                    <img src="/assets/html.png" className="h-16" />
                    <img src="/assets/django.png" className="h-16" />
                    <img src="/assets/bootstrap.png" className="h-16" />
                </div>
            </div>

            

        </div>

    )
}
export default Hero;