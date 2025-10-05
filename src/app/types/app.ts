export type NewArrivalTypes = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type NewArrivalResponse = {
  sections: NewArrivalTypes[];
};

export type PartnerTypes = {
  id: string;
  name: string;
  image: string;
};

export type ProductCardType = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
};

export type ProductDetails = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
  images: string[];
  brand: string;
  stock: string;
  shippingInformation: string;
  meta: {
    qrCode: string;
  };
  returnPolicy: string;
};

export type ParamProps = { menId: string; womenId: string };
