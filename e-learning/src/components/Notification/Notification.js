import { notification } from "antd";

export const openNotificationWithIcon = (message, description, type) => {
  notification[type]({
    message: message,
    description: description,
  });
};
