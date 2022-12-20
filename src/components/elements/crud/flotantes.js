import { NotificationManager } from 'components/common/react-notifications';

const createNotification = (type, title, message, className) => {
  const cName = className || '';
  switch (type) {
    case 'primary':
      NotificationManager.primary(message, title, 3000, null, null, cName);
      break;
    case 'secondary':
      NotificationManager.secondary(message, title, 3000, null, null, cName);
      break;
    case 'info':
      NotificationManager.info(message, title, 3000, null, null, cName);
      break;
    case 'success':
      NotificationManager.success(message, title, 3000, null, null, cName);
      break;
    case 'warning':
      NotificationManager.warning(message, title, 3000, null, null, cName);
      break;
    case 'error':
      NotificationManager.error(message, title, 3000, null, null, cName);
      break;
    default:
      NotificationManager.info('Info message');
      break;
  }
};

export default createNotification;
