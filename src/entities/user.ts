import type { UserProps } from "../types/userTypes.js"

export class User{
    public id?: number
    public email: string
    public name: string

    constructor(props: UserProps){
        this.email = props.email
        this.name = props.name
        this.id = props.id || 0
    }

    async mostrarNome(){
        console.log(this.name)
    }
}