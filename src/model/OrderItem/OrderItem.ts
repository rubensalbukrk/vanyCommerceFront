export interface OrderItemProps {
    orderId: number;
    name: string;
    address: string;
    city: string;
    phone: string;
    total: string;
    products: {
      id: string;
      title: string;
    }[];
  }