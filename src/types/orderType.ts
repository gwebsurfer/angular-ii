export type ItemOrderType = {
  productId: string;
  quantity: number;
};

export type OrderType = {
  name: string;
  deliveryAddress: string;
  items: ItemOrderType[];
};
