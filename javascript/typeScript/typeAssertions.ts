type UserResponse = {
    id: number,
    name: string,
    avatar: string,
    admin?: boolean //opcional na criação 
}

let userResponse = {} as UserResponse

//propriedades disponíves após o type
userResponse.avatar