import {request} from '../../utils/request';

export function _phoneVerify(phone){
    return request({
        url:'/cellphone/existence/check',
        method: 'get',
        params:{
            phone:phone
        }
    })
}

export function _login(phone,password){
    return request({
        url:'/login/cellphone',
        method: 'get',
        params:{
            phone:phone,
            password:password
        }
    })
}

export function _getSongList(id){
    return request({
        url:'/user/playlist',
        method: 'get',
        params:{
            uid:id
        }
    })
}