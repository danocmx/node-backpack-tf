import { Cursor } from "../common"

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

export type GetNotificationsResponse = {
  results: NotificationResponse[];
  cursor: Cursor;
}

export type MarkAsReadNotificationsResponse = {
  modified: number;
}
