import {$host} from './index';
import data from "yarn/lib/cli";

export const exist = async (user_id) => {
    const response = await $host.get(`user/exists/${user_id}`);
    return response.data;
}

export const getUser = async (user_id) => {
    return await $host.get(`user/${user_id}`);
}

export const check = async (user_id, referer) => {
    try {
        const responce = await $host.get(`user/${user_id}`);
        if(responce.data.exist){
            return responce.data;
        } else {
            const userData = {
                user_id: user_id,
                referer: referer ? referer : null,
                balance: 10000
            }

            const createUserResponce = await $host.post('user/', userData);
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
