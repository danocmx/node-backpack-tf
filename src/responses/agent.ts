export type AgentActiveStatus = {
  status: 'active';
  client: string;
  expire_at: number;
  current_time: number;
};

export type AgentInactiveStatus = {
  status: 'inactive';
};

export type AgentStatus = AgentActiveStatus | AgentInactiveStatus;
