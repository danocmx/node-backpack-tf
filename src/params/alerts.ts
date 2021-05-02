export type CreateAlertParams = CreateBlanketAlert | CreateAlertWithCurrencyParams;

export type CreateBlanketAlert = {
  item: string;
  intent: "buy" | "sell";
  blanket: true;
}

export type CreateAlertWithCurrencyParams = {
  item: string;
  intent: "buy" | "sell";
  currency: "keys";
  min?: number;
  max?: number;
}

export type DeleteAlertParams = {
  item: string;
  intent: "buy" | "sell";
};

export function constructCreateAlertParams(params: CreateBlanketAlert|CreateAlertWithCurrencyParams) {
  const { item, intent, ...rest } = params;
  
  return {
    item_name: params.item,
    intent: params.intent,
    ...rest,
  };
}

export function constructDeleteAlertParams(params: DeleteAlertParams) {
  return {
    item_name: params.item,
    intent: params.intent,
  };
}
