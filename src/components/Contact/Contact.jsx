import { HiChevronDown } from "react-icons/hi2";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div className="bg-[#F6F1E6] px-6 py-8 rounded-md">
          <h1 className="text-4xl font-semibold text-[#262626] sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-[#3C3C3C] text-lg leading-8">
            Proin volutpat consequat porttitor cras nullam gravida at.
            Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
            Arcu sed malesuada et magna.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#AB2320] text-xl mt-1" />
              <p>545 Mavis Island <br /> Chicago, IL 99191</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#AB2320] text-xl rotate-90" />
              <p>+1 (555) 234-5678</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#AB2320] text-xl" />
              <p>hello@example.com</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-[#F6F1E6] px-6 py-8 rounded-md relative">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[144.5%] max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#9BBEC0] to-[#055D62] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[288.75%]"
            />
          </div>

          <form action="#" method="POST" className="mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold text-[#262626]">
                  First name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="mt-2.5 block w-full rounded-md bg-[#1E6D72]/15 px-3.5 py-2 text-[#262626] placeholder-[#1E6D72] focus:outline-2 focus:outline-[#AB2320]"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold text-[#262626]">
                  Last name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="mt-2.5 block w-full rounded-md bg-[#1E6D72]/15 px-3.5 py-2 text-[#262626] placeholder-[#1E6D72] focus:outline-2 focus:outline-[#AB2320]"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold text-[#262626]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2.5 block w-full rounded-md bg-[#1E6D72]/15 px-3.5 py-2 text-[#262626] placeholder-[#1E6D72] focus:outline-2 focus:outline-[#AB2320]"
                />
              </div>

              {/* Phone */}
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold text-[#262626]">
                  Phone number
                </label>
                <div className="mt-2.5 flex rounded-md bg-[#1E6D72]/15 focus-within:outline-2 focus-within:outline-[#AB2320]">
                  <select
                    id="country"
                    name="country"
                    className="bg-transparent py-2 pl-3 pr-7 text-gray-400 text-base appearance-none"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <HiChevronDown className="pointer-events-none self-center mr-2 text-gray-400" />
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="123-456-7890"
                    className="flex-1 bg-transparent py-1.5 pl-1 pr-3 text-[#262626] placeholder-[#1E6D72] focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-[#262626]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2.5 block w-full rounded-md bg-[#1E6D72]/15 px-3.5 py-2 text-[#262626] placeholder-[#1E6D72] focus:outline-2 focus:outline-[#AB2320]"
                />
              </div>

              {/* Checkbox */}
              <div className="flex gap-x-4 sm:col-span-2 items-center">
                <input
                  id="agree-to-policies"
                  name="agree-to-policies"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#AB2320] focus:ring-2 focus:ring-[#AB2320]"
                />
                <label htmlFor="agree-to-policies" className="text-sm text-gray-400">
                  By selecting this, you agree to our{' '}
                  <a href="#" className="font-semibold text-[#AB2320]">
                    privacy policy
                  </a>
                  .
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md bg-[#AB2320] px-3.5 py-2.5 text-sm font-semibold text-[#ECE2CD] hover:bg-[#911A18] focus:outline-2 focus:outline-offset-2 focus:outline-[#AB2320]"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
