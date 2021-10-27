import { getGlobalThis } from "@vue/shared"
import { get } from "mongoose"

const list = [
    {
        firstname: 'Aaron', 
        lastName: 'Traver',
        username: 'travera1',
        password:'123',
        favorites: []
    },
]
export function getAll() { return list }
export function GetByUsername(username) { return ({ ...list.find( x => x.username == username), password: undefined})}

export function Add(user){
    if(!user.firstName){
        throw { code: 422, msg: "First name is required"}
    }
    list.push(user)
    return { ...user, password: undefined }
}
export function Update(user_id, user){
    const oldObj = list[user_id];
    if(user.firstName){
        oldObj.firstName = user.firstName;
    }
    if(user.lastName){
        oldObj.lastName = user.lastName;
    }
    if(user.handle){
        oldObj.handle = user.handle;
    }
    if(user.pic){
        oldObj.pic = user.pic;
    }
    //list[user_id] = newObj ;
    return { ...oldObj, password: undefined };
}
export function Delete(user_id) {
    const user = list[user_id];
    list.splice(user_id, 1);
    return user;
}
export function Login(username, password){
    console.log({ username, password})
    const user = list.find(x=> x.username == username);
    if(!user) throw { code: 401, msg: "Sorry that username doesn't exist." };

    if( ! (password == user.password) ){
        throw { code: 401, msg: "Wrong Password" };
    }

    const data = { ...user, password: undefined };

    return { user: data };
}