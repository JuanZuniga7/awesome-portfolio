import type IAsset from "./interfaces/IAsset"
import type ILinkWithIcon from "./interfaces/ILinkWithIcon"

import profile from "../assets/images/profile.jpg"
import home from "../assets/icons/home.astro"
import info from "../assets/icons/info.astro"
import blog from "../assets/icons/blog.astro"
import projects from "../assets/icons/projects.astro"
import friends from "../assets/icons/friends.astro"
import mail from "../assets/icons/mail.astro"
import linkedin from "../assets/icons/linkedin.astro"
import instagram from "../assets/icons/instagram.astro"
import twitter from "../assets/icons/twitter.astro"

interface ICard{
    profile: IAsset;
    nav: ILinkWithIcon[];
    social: ILinkWithIcon[];
}

const getCard = () : ICard => {
    return en;
}

const en:ICard = {
    profile: {
        path: profile,
        alt: "Profile Picture",
    },
    nav: [
        {label: "Home",path: "/", icon: home},
        {label: "About",path: "/about", icon: info},
        {label: "Blog",path: "#soon", icon: blog},
        {label: "Projects",path: "/projects", icon: projects},
        {label: "Friends",path: "/friends", icon: friends},
        {label: "Contact",path: "/contact", icon: mail},
    ],
    social: [
        {label: "Github",path: "", icon: projects},
        {label: "LinkedIn",path: "", icon: linkedin},
        {label: "Instagram",path: "", icon: instagram},
        {label: "Twitter",path: "", icon: twitter},

    ]
}

export default getCard;