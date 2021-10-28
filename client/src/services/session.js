import router from "../router";
import { Login } from "./users";

const session = {
    user: null, 
    messages: [],
    toRoute: '/home',
    Login(username, password){
        try{
            const response = Login(username, password)
            this.user = response.user
            router.push(this.toRoute)
        } catch (error) {
            this.messages.push({text: error.msg, type: 'danger'})
        }
    }
}

export default session