import {$host} from './index';

export const exist = async (user_id) => {
    const res = await fetch(`http://92.51.38.53:5555/user/exists/${user_id}`);
    const responce = await $host.get(`user/exists/${user_id}`);
    return res.json();
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
