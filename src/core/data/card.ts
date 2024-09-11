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
import resume from "../assets/icons/resume.astro"

interface ICard {
        profile: IAsset;
        nav: ILinkWithIcon[];
        social: ILinkWithIcon[];
}

const getCard = (): ICard => {
        return en;
}

const en: ICard = {
        profile: {
                path: profile,
                alt: "Profile Picture",
        },
        nav: [
                { label: "Home", path: "/", icon: home },
                { label: "About", path: "/about", icon: info },
                { label: "Resume", path: "/resume", icon: resume },
                { label: "Blog", path: "#soon", icon: blog },
                { label: "Projects", path: "/projects", icon: projects },
                { label: "Friends", path: "/friends", icon: friends },
                { label: "Contact", path: "/contact", icon: mail },
        ],
        social: [
                { label: "Github", path: "https://github.com/JuanZuniga7", icon: projects },
                { label: "Github", path: "https://github.com/RustedCor", icon: projects },
                { label: "LinkedIn", path: "https://www.linkedin.com/in/zunigajuan7", icon: linkedin },
                { label: "Instagram", path: "https://www.instagram.com/rusted.cor79", icon: instagram },
                { label: "Twitter", path: "https://x.com/rusted_cor", icon: twitter },

        ]
}

export default getCard;
