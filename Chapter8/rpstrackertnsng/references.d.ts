/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />

declare namespace NodeJS {
    interface Global {
        TNS_ENV: string;
        __assign: Function;
    }
}
