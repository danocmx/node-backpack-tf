export type Inventory = {
  value: number;
  updated: number;
  metal: number;
  keys: number;
  slots: {
    used: number;
    total: number;
  };
}

export type BanReason = {
  end: number;
  reason: string;
};

export type User = {
  name: string;
  avatar: string;
  last_online?: number;
  admin?: 1;
  donated?: number;
  premium?: 1;
  premium_months_gifted?: number;
  integrations?: {
    group_member?: 1;
    marketplace_seller?: 1;
    automatic?: 1;
    steamrep_admin?: 1;
  };
  bans?: {
    steamrep_scammer?: 1;
    steamrep_caution?: 1;
    valve?: 1;
    all: BanReason;
    suggestions: BanReason;
    comments: BanReason;
    trust: BanReason;
    issues: BanReason;
    classifieds: BanReason;
    customizations: BanReason;
    reports: BanReason;
    premium: BanReason;
  };
  voting?: {
    reputation: number;
    votes: {
      positive: number;
      negative: number;
      accepted: number;
    };
    suggestions: {
      created: number;
      accepted: number;
      accepted_unusual: number;
    }
  };
  inventory?: {
    440?: Inventory;
    570?: Inventory;
    730?: Inventory;
  };
  trust?: {
    positive?: number;
    negative?: number;
  }
}

export type UserInfoResponse = {
  users: Record<string, User>
}
