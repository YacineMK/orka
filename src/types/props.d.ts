export type LayoutProps = {
  children: React.ReactNode;
};

export type SettingsContentProps = {
  title: string;
  name: string;
  desctiption: string;
  isOpen: boolean;
  icon: JSX.Element;
};

export type DahsboardTableCardProps = {
  name: string;
  status: "Done" | "Review" | "Progress" | "Canceled";
  phone: string;
  address: string;
};

export type ProductCardProps = {
  name: string;
  price: number;
  description: string;
  image: string;
};

export type TeamContentCardProps = {
  name: string;
  email: string;
  Image: string;
};
