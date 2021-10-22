import { createServer, Model } from "miragejs"
import getUsers from "./getUsers.json";

export default function createRestServer () {
    createServer({
        models: {
            user: Model,
        },
        seeds(server){
            getUsers.objects.forEach((user) =>{
                server.create("user", user);
            })
        },

        routes() {
            this.post("/api/user", (schema, request) => {
                try{
                    const {login, password} = JSON.parse(request.requestBody);
                    const candidate = schema.users.findBy({login: login});
                    if(!candidate) return { status: false, message: "Неверный логин" };
                    if(candidate.password !== password) return { status: false, message: "Неверный пароль" }
                    return { status: true, user: { login: candidate.login } };
                }catch (err) {
                    return { status: false, message: err.message }
                }

            })
        },
    })
}