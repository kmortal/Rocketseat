type Char = {
    nickname: string;
    level: number
}

type User = {
    id: number;
    name: string
}

//intersescção(&): todos os atributos unidos
type PlayerInfo = User & Char

//variante
type PlayerInfo2 = User & {
    nickname: string;
    level: number
}