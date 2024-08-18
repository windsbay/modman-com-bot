import {$host} from './index';
import {useContext} from "react";
import {Context} from "../index";

export const exist = async (user_id) => {
    return await $host.get(`user/exists/${user_id}`);
}

export const getUser = async (user_id) => {
    return await $host.get(`user/${user_id}`);
}

export const check = async (user_id, referer) => {
    const {user} = useContext(Context);
    try {
        const responce = await $host.get(`user/${user_id}`);
        if(responce.data.exist){
            user.setUser(responce.data)
            return responce.data;
        } else {
            const userData = {
                user_id: user_id,
                referer: referer ? referer : null,
                balance: 10000
            }

            const createUserResponce = await $host.post('user/', userData);
            user.setUser(createUserResponce.data)
            return createUserResponce.data;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getRewards = async (user_id) => {
    return await $host.get(`user/rewards/${user_id}`);
}
