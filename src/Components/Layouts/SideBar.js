import React from 'react'
import '../../assets/scss/aside.scss'
import pp from '../../assets/img/user-profile-pic.jpeg'
import { FaCamera } from 'react-icons/fa';

const SideBar = () => {
    const menuItems = [
        { title: "Profile", linkTo: "" },
        { title: "Dashboard", linkTo: "" },
        { title: "Assets", linkTo: "" },
        { title: "Users", linkTo: "" },
    ]

    return (
        <div className="vh-100 bg-white aside">
            <div className="aside-menu">
                <div className="user-avatar">
                    <img src={pp} height={85} className="d-inline-block align-text-top rounded-circle" />
                    <div className="bg-danger rounded-circle avatar-cam text-center d-flex justify-content-center align-items-center">
                        <FaCamera size={25} color={"white"} />
                    </div>
                </div>
                <div className="menu-items">
                    <ul>
                        {
                            menuItems.map(
                                item => <li>
                                    <div className="menu-item">
                                        {item.title}
                                    </div>
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar
