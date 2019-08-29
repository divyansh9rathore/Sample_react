export const SHOW_MESSAGE = 'SHOW_MESSAGE'
export const CLOSE_MESSAGE = 'CLOSE_MESSAGE'

export const showMessage = (type, message, action) => {
    return {type: SHOW_MESSAGE, payload: {type, message, action} }
}

export const closewMessage = () => {
    return {type: CLOSE_MESSAGE }
}

