/* tslint:disable:no-any */
declare const NODE_ENV;

const isDev: boolean = (NODE_ENV === 'development');

const debug = (text: any): any =>
    (isDev) ? console.log(text) : undefined;

export default debug;
