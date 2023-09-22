import { NavLink } from "react-router-dom";
import Article from "./../../assets/images/article.png";

export const ArticleCard = ({
    imagePath,
    headerText,
    summaryText,
    link,
  }) => {
    return (
        <NavLink to={link}>
            <div class="flex flex-col bg-white p-4 rounded-lg shadow-md">
                <img class="w-full" src={Article} alt="Sunset in the mountains"/>
                <div class="px-2 py-4">
                    <div class="font-bold text-lg mb-2">{headerText}</div>
                    <p class="text-gray-700 text-xs">{summaryText}</p>
                </div>
            </div>
        </NavLink>     
    );
};