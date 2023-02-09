import { InfoContext } from 'context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavigationArrow } from './svgs'

const HomeButton: React.FC = () => {
  const infoCtx = useContext(InfoContext)

  const clearAllDataHandler = () => {
    infoCtx.clearDataHandler()
  }

  return (
    <div>
      <Link
        className=" h-10 w-10 flex justify-center items-center rounded-[50%] bg-[#F9F9F9]"
        to="/"
        onClick={clearAllDataHandler}
      >
        <NavigationArrow />
      </Link>
    </div>
  )
}

export default HomeButton
