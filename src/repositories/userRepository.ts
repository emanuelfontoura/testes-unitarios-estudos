import { User } from "../entities/user.js";
import type { UserProps } from "../types/userTypes.js";

export class UserRepository{
    public users: User[]

    constructor(users: User[]){
        this.users = users
    }

    create(userProps: UserProps): User{
        const userExists = this.users.find(user => user.email === userProps.email)
        if(userExists) throw new Error('User already exists.')

        const user = new User({
            ...userProps,
            id: this.users.length + 1
        })
        this.users.push(user)
        return user
    }

    getUsers(): User[]{
        return this.users
    }

    findById(id: number): User | null{
        const user = this.users.filter(user => user.id === id && user.id !== 0)
        if(!user[0]) return null
        return user[0]
    }
}