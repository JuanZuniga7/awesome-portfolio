import type ITag from "./interfaces/ITag";

const path = "/components/";

const en: ITag[] = [
    {label: "backend", amount: 1, path: path.concat("backend")},
    {label: "frontend", amount: 1, path: path.concat("frontend")},
    {label: "mobile", amount: 1, path: path.concat("mobile")},
    {label: "desktop", amount: 1, path: path.concat("desktop")},
    {label: "System", amount: 1, path: path.concat("system")},
]

export default en;