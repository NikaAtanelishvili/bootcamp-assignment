import { CloseIcon } from 'components'
import ReactDOM from 'react-dom'

const Popup: React.FC<{ handlePopupClose: any }> = props => {
  return ReactDOM.createPortal(
    <div className="absolute top-[53px] right-[70px]">
      <div className="relative shadow-xl px-8 flex items-center justify-center rounded-lg w-[423px] h-[167px] ">
        <button
          type="button"
          onClick={props.handlePopupClose}
          className=" absolute top-4 right-3"
        >
          <CloseIcon />
        </button>
        <h1 className=" font-Helvetica font-medium text-[28px] text-[#1A1A1A] leading-[43px]">
          რეზიუმე წარმატებით გაიგზავნა 🎉
        </h1>
      </div>
    </div>,
    document.getElementById('resumePopup')!
  )
}

export default Popup
