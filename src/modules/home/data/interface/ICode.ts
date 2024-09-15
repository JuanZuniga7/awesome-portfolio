export default interface ICode{
    title: string
    lines: ILine[]
}

export interface ILine{
    words: IWord[]
    link?: string
}

interface IWord{
    content: string
    color: string
    complement?: IWord[]
}