/* tslint:disable:no-any */
declare const PROCESS_ENV;

const isDev: boolean = (PROCESS_ENV === 'development');

const debug = (text: any): any =>
    (isDev) ? console.log(text) : undefined;

export default debug;
