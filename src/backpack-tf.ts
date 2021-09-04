import { RequestClient } from "./request-client/common";
import {
  constructMyListingParams,
  MyListingsParams,
} from "./params/my-listings";
import { constructSearchParams, SearchParams } from "./params/search";
import { constructDeleteListingsParams } from "./params/delete-listings";
import {
  constructCreateListingsParams,
  ListingParams,
} from "./params/create-listings";
import { constructUserInfoParams, UserInfoParams } from "./params/user-info";
import {
  constructCreateAlertParams,
  constructDeleteAlertParams,
  CreateAlertParams,
  DeleteAlertParams,
} from "./params/alerts";
import { MyListingsResponse } from "./responses/my-listings";
import {
  handleSearchResponse,
  SearchResponse,
  Search,
} from "./responses/search";
import {
  constructGetSnapshotParams,
  GetSnapshotParams,
} from "./params/snapshot";
import { constructDeleteAllListingsParams, UpdateListing } from "./params/classifieds-v2";
import { DeleteListingsResponse } from "./responses/delete-listings";
import { CreateListingsResponse } from "./responses/create-listings";
import { HeartbeatResponse } from "./responses/heartbeat";
import { UserInfoResponse } from "./responses/user-info";
import {
  InventoryRefreshResponse,
  InventoryStatusResponse,
  InventoryValuesResponse,
} from "./responses/inventory";
import { ClientResponse } from "./responses/client";
import { AgentStatus } from "./responses/agent";
import { getAxiosRequest } from "./request-client/axios";
import { AlertResponse, GetAlertsResponse } from "./responses/alerts";
import {
  GetNotificationsResponse,
  MarkAsReadNotificationsResponse,
  NotificationResponse,
} from "./responses/notifications";
import { constructCursorParams, CursorParams } from "./params/common";
import { SnapshotResponse } from "./responses/snapshot";
import { DeleteAllListingsResponse, DeleteListingArchiveResponse, GetListingArchiveResponse, V2Listing } from "./responses/classifieds-v2";
import { Intent } from "./common";

export type BackpackTFOptions = {
  requestClient?: RequestClient;
  token?: string;
  apiKey?: string;
};

export class BackpackTFAPI {
  public requestClient: RequestClient;
  private apiKey: string;
  private token: string;

  constructor({
    requestClient = getAxiosRequest(),
    apiKey = "",
    token = "",
  }: BackpackTFOptions) {
    this.requestClient = requestClient;
    this.apiKey = apiKey;
    this.token = token;
  }

  private request<T>(
    method: "GET" | "DELETE" | "POST" | 'PATCH',
    path: string,
    {
      payload = {},
      as = "data",
      auth = "none",
    }: {
      payload?: Record<string, unknown>;
      as?: "data" | "params";
      auth: "key" | "token" | "none";
    }
  ) {
    const payloadWithAuth = { ...payload };
    if (auth === "key") payloadWithAuth.key = this.apiKey;
    else if (auth === "token") payloadWithAuth.token = this.token;

    return this.requestClient.send<T>({
      method,
      url: `https://backpack.tf/api/${path}`,
      ...(as === "data"
        ? { data: payloadWithAuth }
        : { params: payloadWithAuth }),
    });
  }

  searchClassifieds(params: SearchParams): Promise<Search> {
    return this.request<SearchResponse>("GET", "classifieds/search/v1", {
      auth: "key",
      as: "params",
      payload: constructSearchParams(params),
    }).then((response) => {
      return handleSearchResponse(response);
    });
  }

  createListings(listings: ListingParams[]): Promise<CreateListingsResponse> {
    return this.request<CreateListingsResponse>("POST", "classifieds/list/v1", {
      auth: "token",
      payload: constructCreateListingsParams(listings),
      as: "data",
    });
  }

  deleteListings(ids: string[]) {
    return this.request<DeleteListingsResponse>(
      "DELETE",
      "classifieds/delete/v1",
      {
        auth: "token",
        payload: constructDeleteListingsParams(ids),
        as: "data",
      }
    );
  }

  sendHeartbeat() {
    return this.request<HeartbeatResponse>("POST", "aux/heartbeat/v1", {
      auth: "token",
      payload: {},
      as: "params",
    });
  }

  getMyListings(params: MyListingsParams) {
    return this.request<MyListingsResponse>("GET", "classifieds/listings/v1", {
      auth: "token",
      payload: constructMyListingParams(params),
      as: "params",
    });
  }

  getUserInfo(params: UserInfoParams) {
    return this.request<UserInfoResponse>("GET", "users/info/v1", {
      auth: "key",
      payload: constructUserInfoParams(params),
      as: "params",
    });
  }

  getInventoryValues(steamId: string) {
    return this.request<InventoryValuesResponse>(
      "GET",
      `inventory/${steamId}/values`,
      {
        auth: "token",
      }
    );
  }

  getInventoryStatus(steamId: string) {
    return this.request<InventoryStatusResponse>(
      "GET",
      `inventory/${steamId}/status`,
      {
        auth: "token",
      }
    );
  }

  refreshInventory(steamId: string) {
    return this.request<InventoryRefreshResponse>(
      "POST",
      `inventory/${steamId}/refresh`,
      {
        auth: "token",
      }
    );
  }

  getClient() {
    return this.request<ClientResponse>("GET", "", {
      auth: "token",
    });
  }

  sendAgentPulse() {
    return this.request<AgentStatus>("POST", `agent/pulse`, {
      auth: "token",
    });
  }

  stopAgent() {
    return this.request<AgentStatus>("POST", `agent/stop`, {
      auth: "token",
    });
  }

  getAgentStatus() {
    return this.request<AgentStatus>("POST", `agent/status`, {
      auth: "token",
    });
  }

  getNotification(id: string) {
    return this.request<NotificationResponse>("GET", `notifications/${id}`, {
      auth: "token",
    });
  }

  deleteNotification(id: string) {
    return this.request<AgentStatus>("DELETE", `notifications/${id}`, {
      auth: "token",
    });
  }

  getNotifications(cursor?: CursorParams) {
    return this.request<GetNotificationsResponse>("GET", `notifications`, {
      auth: "token",
      payload: constructCursorParams(cursor),
      as: "params",
    });
  }

  markNotificationsAsReadAndReturn() {
    return this.request<NotificationResponse[]>(
      "POST",
      `notifications/unread`,
      {
        auth: "token",
      }
    );
  }

  markNotificationsAsRead() {
    return this.request<MarkAsReadNotificationsResponse>(
      "POST",
      `notifications/mark`,
      {
        auth: "token",
      }
    );
  }

  getAlert(id: string) {
    return this.request<AlertResponse>("GET", `classifieds/alerts/${id}`, {
      auth: "token",
    });
  }

  deleteAlert(id: string) {
    return this.request<AgentStatus>("DELETE", `classifieds/alerts/${id}`, {
      auth: "token",
    });
  }

  getAlerts(cursor?: CursorParams) {
    return this.request<GetAlertsResponse>("GET", `classifieds/alerts`, {
      auth: "token",
      payload: constructCursorParams(cursor),
      as: "params",
    });
  }

  createAlert(params: CreateAlertParams) {
    return this.request<AlertResponse>("POST", `classifieds/alerts`, {
      auth: "token",
      payload: constructCreateAlertParams(params),
      as: "data",
    });
  }

  deleteAlertByItem(params: DeleteAlertParams) {
    return this.request<undefined>("DELETE", `classifieds/alerts`, {
      auth: "token",
      payload: constructDeleteAlertParams(params),
      as: "data",
    });
  }

  /**
   * Retrieves listing snapshot from backpack.tf cached api.
   * @param params.sku full item name used by backpack.tf as a caching key
   * @param params.skip how many listings you want to skip
   * @return snapshot
   */
  getListingSnapshot(params: GetSnapshotParams) {
    return this.request<SnapshotResponse>(
      "GET",
      `classifieds/listings/snapshot`,
      {
        auth: "token",
        payload: constructGetSnapshotParams(params),
        as: "params",
      }
    );
  }

  //////////////////////////////////////////////////////////////////////////////////////
  // V2 Classifieds API
  //////////////////////////////////////////////////////////////////////////////////////

  getListingArchive(cursor?: CursorParams) {
    return this.request<GetListingArchiveResponse>(
      "GET",
      `v2/classifieds/archive`,
      {
        auth: "token",
        payload: constructCursorParams(cursor),
        as: "params",
      }
    );
  }

  deleteListingArchive() {
    return this.request<DeleteListingArchiveResponse>(
      "DELETE",
      `v2/classifieds/archive`,
      {
        auth: "token",
      }
    );
  }

  getArchivedListing(id: string) {
    return this.request<V2Listing>(
      "GET",
      `v2/classifieds/archive/${id}`,
      {
        auth: "token",
      }
    ); 
  }

  deleteArchivedListing(id: string) {
    return this.request<undefined>(
      "DELETE",
      `v2/classifieds/archive/${id}`,
      {
        auth: "token",
      }
    ); 
  }

  updateArchivedListing(id: string, params: UpdateListing) {
    return this.request<V2Listing>(
      "PATCH",
      `v2/classifieds/archive/${id}`,
      {
        auth: "token",
        payload: params,
        as: 'data'
      }
    ); 
  }

  /**
   * Publish one archived listing to the active pool
   * @param id listing id
   */
  publishArchivedListing(id: string) {
    return this.request<undefined>(
      "POST",
      `v2/classifieds/archive/${id}/publish`,
      {
        auth: "token",
      }
    ); 
  }

  deleteAllListings(intent?: Intent) {
    return this.request<DeleteAllListingsResponse>(
      "DELETE",
      `v2/classifieds/listings`,
      {
        auth: "token",
        payload: constructDeleteAllListingsParams(intent),
        as: 'data'
      }
    ); 
  }

  getListing(id: string) {
    return this.request<V2Listing>(
      "GET",
      `v2/classifieds/listings/${id}`,
      {
        auth: "token",
      }
    ); 
  }

  deleteListing(id: string) {
    return this.request<V2Listing>(
      "DELETE",
      `v2/classifieds/listings/${id}`,
      {
        auth: "token",
      }
    ); 
  }

  updateListing(id: string, params: UpdateListing) {
    return this.request<V2Listing>(
      "PATCH",
      `v2/classifieds/listings/${id}`,
      {
        auth: "token",
        payload: params,
        as: 'data'
      }
    ); 
  }

  archiveListing(id: string) {
    return this.request<undefined>(
      "POST",
      `v2/classifieds/listings/${id}/archive`,
      {
        auth: "token",
      }
    ); 
  }
}
