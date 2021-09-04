import { ApiResponse } from './common'

export type NotificationResponse = {
  id: string;
  steamid: string;
  folder: number;
  unread: boolean;
  lastMoved: number;
  elementId: string;
  subelementId: string|null;
  userId: string;
  type: number;
  bundle: null;
  contents: {
    message: string;
    subject: string;
    url: string;
  }
}

export type GetNotificationsResponse = ApiResponse<NotificationResponse>;

export type MarkAsReadNotificationsResponse = {
  modified: number;
}
