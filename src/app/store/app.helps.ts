
export const appToken = 'eura-token' 

export const setToken = (token: string) => {
    localStorage.setItem(appToken, token)
}


export const getToken = () => {
    return localStorage.getItem(appToken)
}


export const deleteToken = () => {
    localStorage.removeItem(appToken)
}

export const clearAllStorage = () => {
    localStorage.clear()
}