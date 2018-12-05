interface ReviewResult {
  product: Product;
  buyCount: number;
  viewCount: number;
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
