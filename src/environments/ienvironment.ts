export type LogLevel = 'debug' | 'info' | 'ward' | 'error';

export interface IEnvironment {
    production: boolean;

    //Enables use of ng.profiler.timeChangeDetection(); in browser console
    enableDebugTools: boolean;
    logLevel: LogLevel;
    apiUrl: string;
    apiHost: string;
}