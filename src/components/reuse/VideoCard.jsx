import { NavLink } from "react-router-dom";
import VideoImg from "./../../assets/images/video.png";

export const VideoCard = ({
    imagePath,
    headerText,
    summaryText,
    link,
  }) => {
    return (
        <NavLink to={link}>
            <div class="flex flex-col bg-white p-4 rounded-lg shadow-md">
                <img class="w-full" src={VideoImg} alt="Sunset in the mountains"/>
                <div class="px-2 py-4">
                    <div class="font-bold text-xl mb-2">{headerText}</div>
                    <p class="text-gray-700 text-base">{summaryText}</p>
                </div>
            </div>
        </NavLink>     
    );
};