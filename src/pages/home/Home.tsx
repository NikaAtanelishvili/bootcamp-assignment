import { Link } from 'react-router-dom'

import { RedberryLogo } from 'components'
import diLogo from '../../components/images/homepageLogo.png'

const Home = () => {
  return (
    <div className="h-screen w-full px-16 bg-[#FFFFFF]">
      <div className="w-full border-b border-[#1A1A1A] py-6">
        <RedberryLogo />
      </div>
      <Link
        to="/private"
        className="flex justify-center items-center bg-[#1A1A1A] text-[#FFFFFF] font-medium text-xl leading-6 h-[60px] max-w-[464px] rounded-lg"
      >
        რეზიუმეს დამატება
      </Link>
      <img src={diLogo} alt="digital transformation agency logo" />
    </div>
  )
}

export default Home
