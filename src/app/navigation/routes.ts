interface RouteConfig {
  eventKey: string;
  label: string;
  to: string;
}

const home: RouteConfig = {
  eventKey: 'home',
  label: 'Home',
  to: '/',
};

const example: RouteConfig = {
  eventKey: 'example',
  label: 'Example',
  to: '/example',
};

const products = {
  eventKey: 'products',
  label: 'Products',
  to: '/products',
};

const routes = {
  home,
  example,
  products,
};

export default routes;
