import ProfileHeader from "./ProfileHeader"
import '../styles/profile.css'
import image from '../assets/image.jpg'
import { BiBook } from "react-icons/bi"

const courses = [
    {
        title: 'HTML CSS',
        duration: '2 Hours',
        icon: <BiBook />
    },
    {
        title: 'JavaScript',
        duration: '2 Hours',
        icon: <BiBook />
    },
    {
        title: 'React.js',
        duration: '2 Hours',
        icon: <BiBook />
    } ,
    {
        title: 'Ruby',
        duration: '2 Hours',
        icon: <BiBook />
    },
]
const Profile =() =>{
    return (
        <div className="profile">
            <ProfileHeader />
            <div className="user--profile">
                <div className="user--detail">
                    <img src={image} alt="" height={200} width={200} />
                    <h3 className="username">Elvis Rono</h3>
                    <span className="profession">Web Developer</span>
                </div>
                <div className="user-courses">
                    {courses.map((coures) => (
                        <div className="course">
                            <div className="course-detail">
                                <div className="course-cover">{coures.icon}</div>
                                <div className="course-name">
                                    <h5 className="title">{coures.title}</h5>
                                    <span className="duration">{coures.duration}</span>
                                </div>
                            </div>
                            <div className="action">:</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Profile