import Api from "./baseApi"
const getUserNotifications = (user_id) => {
    return Api.get(`/user-notification/${user_id}`)
}
export const NotifyService = {
    getUserNotifications
}