import { Router } from 'express';
import Path from 'path';

export const createRoute = (router: string) => {

    const routesPath = Path.resolve(__dirname, '../../../', 'api/infraestructure/routers/');
    const routePath = Path.resolve(
        routesPath,
        Path.extname(router) === '.js' ? router : `${router}.js`
    )
    return require(`${routePath}`) as Router;

}
