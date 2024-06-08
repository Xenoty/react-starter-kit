interface RouteConfig {
  keyName: string;
  displayName: string;
  path: string;
}

const home: RouteConfig = {
  keyName: 'home',
  displayName: 'Home',
  path: '/',
};

const example: RouteConfig = {
  keyName: 'example',
  displayName: 'Example',
  path: '/example',
};

const routes = {
  home,
  example,
};

export default routes;
