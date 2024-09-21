export const checkValidData = (email, password) => {
    const validEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!validEmail) return "Email is Invalid";
    if (!validPassword) return "Password is Invalid";
    return null;
}