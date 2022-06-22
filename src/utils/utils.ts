export const validateName = (name: string) => {
    if (name.trim() !== '' && name.trim().includes(' ')) {
        return true;
    } else {
        return false;
    }
}