export const validateName = (name: string) => {
    if (name.trim() !== '' && name.trim().includes(' ')) {
        return true;
    }
    return false;
}

export const validateEmail = (email: string) => {
    // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    if (email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
        return true;
    }
    return false;
}

export const validatePhone = (phone: string) => {
    if (phone.length < 9) {
        return false;
    }
    return /^\d+$/.test(phone);
}

export const validateMessage = (message: string) => {
    if (message.trim() !== '') {
        return true;
    }
    return false;
}