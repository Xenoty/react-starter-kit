interface RouteConfig {
    keyName: string;
    displayName: string;
    path: string;
}

export const home: RouteConfig = {
    keyName: "home",
    displayName: "Home",
    path: "/"
}

export const example: RouteConfig = {
    keyName: "example",
    displayName: "Example",
    path: "/example"
}

const routes = {
    home, example
}

export default routes;