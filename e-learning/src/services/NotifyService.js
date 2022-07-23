import api from './baseApi'
const getUserNotifications = (user_id) => {
    return api.get(`/user-notification/${user_id}`)
}
export const NotifyService = {
    getUserNotifications
}