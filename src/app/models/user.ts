export class User {
    name: string = '';
    username: string = '';
    password: string = '';
    phone: string = '';
    avatar: string = '';
    constructor({nome, username, password, telefone, avatar}) {
        this.name = nome;
        this.username = username;
        this.password = password;
        this.phone = telefone;
        this.avatar = avatar;
    }
}