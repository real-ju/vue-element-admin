import store from '@/store'

function getUserPlatform() {
    let platform = store.getters['auth/platform'];
    
    return platform && platform.symbol
}

function getUserPers() {
    return store.getters['auth/pers'] || []
}

function hasPer(value) {
    let pers = getUserPers();

    if(typeof value === 'string') {
        return pers.indexOf(value) === -1 ? false : true;
    }
    else if(Array.isArray(value)) {
        let has = true;
        for(let index = 0; index < value.length; index++) {
            const item = value[index];
            if(pers.indexOf(item) == -1) {
                has = false;
                break;
            }
        }

        return has
    }
    else {
        return false
    }
}

export default {
    getUP: getUserPlatform,
    getPers: getUserPers,
    hasPer
}