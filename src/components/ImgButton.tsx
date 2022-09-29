import {FC} from "react";

const ImgButton: FC<{ imgPath: string, alt: string, onClick: () => void }> = (props) => {
    return <button className="rounded-[50%] border-none bg-inherit hover:bg-[cornflowerblue] active:bg-[blueviolet] p-0"
                   onClick={props.onClick}>
        <img className="w-[1.6vw] p-[8px] box-content" src={props.imgPath}
             alt={props.alt}/>
    </button>
}

export default ImgButton;