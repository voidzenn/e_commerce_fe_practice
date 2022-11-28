export default {
  homePage: '/',
  signin: '/signin',
  signup: '/signup',
  customer: {
    home: '/customer/home',
    items: '/customer/items',
    orders: '/customer/orders',
  },
  seller: {
    home: '/seller/home',
    items: '/seller/items',
    orders: '/seller/orders',
  },
} as const;
