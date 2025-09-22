import { Link, NavLink } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className=" py-12">
            <div className="max-w-7xl mx-auto px-6 container-footer">
                {/* Top Grid */}
                <div className="grid grid-cols-5 mx-auto gap-8 mb-12 list-footer">
                    <div className='footer-colm'>
                        <h3 className="text-black font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
                            <li><NavLink to="/careers" className="hover:underline">Careers</NavLink></li>
                            <li><NavLink to="/" className="hover:underline">Brand Center</NavLink></li>
                            <li><NavLink to="/blog" className="hover:underline">Blog</NavLink></li>
                        </ul>
                    </div>

                    <div className='footer-colm'>
                        <h3 className="text-black font-semibold mb-4">Help Center</h3>
                        <ul className="space-y-2">
                            <li><NavLink to="/" className="hover:underline">Support</NavLink></li>
                            <li><NavLink to="/" className="hover:underline">Discord</NavLink></li>
                            <li><NavLink to="/" className="hover:underline">Twitter</NavLink></li>
                            <li><NavLink to="/contact" className="hover:underline">Contact Us</NavLink></li>
                        </ul>
                    </div>

                    <div className='footer-colm'>
                        <h3 className="text-black font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><NavLink to="/" className="hover:underline">Privacy Policy</NavLink></li>
                            <li><NavLink to="/" className="hover:underline">Licensing</NavLink></li>
                            <li><NavLink to="/" className="hover:underline">Terms</NavLink></li>
                        </ul>
                    </div>

                    <div className='footer-colm'>
                        <h3 className="text-black font-semibold mb-4">Courses</h3>
                        <ul className="space-y-2">
                            <li><NavLink to="/" className="hover:underline">All Courses</NavLink></li>
                            <li><NavLink to="/" className="hover:underline">Popular</NavLink></li>
                            <li><NavLink to="/" className="hover:underline">Categories</NavLink></li>
                            <li><NavLink to="/" className="hover:underline">Instructors</NavLink></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-black font-semibold mb-4">Download</h3>
                        <ul className="space-y-2">
                            <li><NavLink to="/" className="hover:underline">iOS</NavLink></li>
                            <li><NavLink to="/" className="hover:underline">Android</NavLink></li>
                            <li><NavLink to="/" className="hover:underline">Windows</NavLink></li>
                            <li><NavLink to="/" className="hover:underline">MacOS</NavLink></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-700 mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col items-center gap-[1rem]">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <img src="assets/skillifylogo.png" alt="Logo" className="h-8 w-15" />
                        <span className="text-black font-bold text-lg">Skillify</span>
                    </div>

                    <p className="text-sm">&copy; {new Date().getFullYear()} Skillify™. All Rights Reserved.</p>

                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <NavLink to="/"><FaFacebook className="hover:text-black" /></NavLink>
                        <NavLink to="/"><FaTwitter className="hover:text-black" /></NavLink>
                        <NavLink to="/"><FaInstagram className="hover:text-black" /></NavLink>
                        <NavLink to="/"><FaGithub className="hover:text-black" /></NavLink>
                        <NavLink to="/"><FaLinkedin className="hover:text-black" /></NavLink>
                    </div>
                </div>
            </div>
        </footer>


    );
}
