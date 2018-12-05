interface Order {
  Address: Address;
  BillingAddress: Address;
  CartStatus: string;
  CheckOutedDateTime: Date;
  Contact: Contact;
  CustomerCurrency: any[];
  Discount: number;
  GrandTotal: number;
  Id: string;
  MemberItems?: any;
  Membership: Membership;
  Nationality: string;
  ProductItems: ProductItem[];
  ReceiptId: string;
  RecordStatus: string;
  Remark: string;
  ShippingAddress: Address;
  ShippingMethod: ShippingMethod;
  ShopCurrencyList: any[];
  ShopId: string;
  ShopLogo: string;
  ShopName: string;
  Tags: any[];
  Template: string;
  TotalPrice: number;
  UserId: string;
}

interface ShippingMethod {
  Name: string;
  ShippingFees: number;
  Type: string;
}

interface ProductItem {
  Discount: number;
  DiscountExpireDate?: Date;
  DisplayExtraDataFields?: any;
  Id: string;
  Logo: string;
  Name: string;
  NameExtension: string;
  Price: number;
  Product: Product;
  Quantity: number;
  StockQuantity: number;
  Tags: string[];
}

interface Product {
  Currency: string;
  Details: string;
  Discount: number;
  ExpireTierCode: string;
  ExtendedDatas: ExtendedData[];
  ListPrice: number;
  Logo: string;
  Name: string;
  NameExtension: string;
  PriceRangeMax: number;
  PriceRangeMin: number;
  ProductId: string;
  ShopId: string;
  ShopLogo: string;
  ShopName: string;
  Tags: string[];
  TempExtendedDatas: string;
}

interface ExtendedData {
  Name: string;
  Title: string;
  TitleKey: string;
  Value: string;
}

interface Membership {
  ExpiredDate?: Date;
  MemberLevel?: any;
  Point?: any;
  RegisterDate: Date;
}

interface Contact {
  Email?: any;
  Mobile?: any;
}

interface Address {
  Line1: string;
  Line2: string;
  Province: string;
  ReceiverName: string;
  ZipCode: string;
}
