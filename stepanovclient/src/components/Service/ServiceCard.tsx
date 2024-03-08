import { FC } from "react"
import { Link } from "react-router-dom";

export interface IServiceCardProps{
    title: string;
    id:string;
    description: string;
}
const ServiceCard: FC<IServiceCardProps> = ({id, title, description }) => {
    return(
        <Link to = {`/service-details/${id}`} style={{color:"black"}}>
        <div className="work-item work__work-item">
                <h1 className="content__head work-item__content-head content__head__headThree">{title}</h1>
                <p className="content__desc work-item__content-desc content__desc__largeDesc">{description}</p>
                <Link to={`/service-details/${id}`} className="button work-item__button button__readMore">
                    ReadMore
                    <i><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>
                    </i>
                </Link>
        </div>
        </Link>
    );

}
export default ServiceCard;

