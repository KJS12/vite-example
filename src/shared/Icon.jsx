import { TbStar, TbStarFilled } from "react-icons/tb";
import { IoHome } from "react-icons/io5";

const ICONS = {
    star: TbStar,
    starFill: TbStarFilled,
    home: IoHome,
}

/**
 * Icon 컴포넌트
 *
 * 사용예제)
 *  <Icon type="star" color="" size="15" style={} className=""  />
 *
 * 참고 URL)
 *  https://react-icons.github.io/react-icons
 * ex)
 * @param {*} param0
 * @returns
 */
const Icon = ({type, ...props}) => {
    const IconComponent = ICONS[type];
    if(!IconComponent) return null;

    return <IconComponent {...props} />;
}

export default Icon;