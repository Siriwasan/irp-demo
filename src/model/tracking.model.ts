interface Tracking {
  id: string;
  userId: string;
  productItems: ProductItem[];
  memberItems?: any;
  address: Address;
  shippingAddress: Address;
  billingAddress: Address;
  shippingMethod: ShippingMethod;
  membership: Membership;
  shopId: string;
  shopLogo: string;
  shopName: string;
  tags: any[];
  remark: string;
  contact: Contact;
  template: string;
  totalPrice: number;
  discount: number;
  grandTotal: number;
  nationality: string;
  shopCurrencyList: any[];
  customerCurrency: any[];
  checkOutedDateTime: Date;
  receiptId: string;
  cartStatus: string;
}

interface Contact {
  email?: any;
  mobile?: any;
}

interface Membership {
  memberLevel?: any;
  point?: any;
  registerDate: Date;
  expiredDate?: Date;
}

interface ShippingMethod {
  name: string;
  type: string;
  shippingFees: number;
}

interface Address {
  receiverName: string;
  line1: string;
  line2: string;
  province: string;
  zipCode: string;
}

interface ProductItem {
  product: Product;
  quantity: number;
  stockQuantity: number;
  price: number;
  discount: number;
  discountExpireDate?: Date;
  displayExtraDataFields?: any;
  id: string;
  name: string;
  nameExtension: string;
  logo: string;
  tags: string[];
}

interface Product {
  shopId: string;
  shopLogo: string;
  shopName: string;
  productId: string;
  name: string;
  nameExtension: string;
  logo: string;
  details: string;
  priceRangeMin: number;
  priceRangeMax: number;
  listPrice: number;
  extendedDatas: ExtendedData[];
  tempExtendedDatas: string;
  expireTierCode: string;
  tags: string[];
  discount: number;
  currency: string;
}

interface ExtendedData {
  name: string;
  titleKey: string;
  title: string;
  value: string;
}
