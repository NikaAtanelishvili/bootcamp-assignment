import { Link } from 'react-router-dom'
import background from '../../components/images/background.png'
import { RedberryLogo } from 'components'
import diLogo from '../../components/images/homepageLogo.png'

const Home = () => {
  return (
    <div className=" overflow-hidden relative w-full h-screen flex flex-col justify-between items-center px-16">
      <img
        className=" top-0 left-0 h-screen w-full absolute -z-10 "
        src={background}
        alt={'background'}
      />
      <div className="w-full border-b border-[#1A1A1A] py-6 ">
        <RedberryLogo />
      </div>
      <Link
        to="/personalinfo"
        className="flex justify-center items-center bg-[#1A1A1A] text-[#FFFFFF] font-medium text-xl leading-6 h-[60px] w-[464px] rounded-lg"
      >
        რეზიუმეს დამატება
      </Link>
      <div></div>

      <img
        className="-z-11 w-[299px] h-[299px] absolute right-[30%] top-[45%]"
        src={diLogo}
        alt="digital transformation agency logo"
      />
    </div>
  )
}

export default Home
