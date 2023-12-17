export const checkValidData = (email,password) => {
    const isEmailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isPasswordvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)
    if(!isEmailvalid) return "Email ID is not valid"
    if(!isPasswordvalid) return "Password is not valid"

    return null
}