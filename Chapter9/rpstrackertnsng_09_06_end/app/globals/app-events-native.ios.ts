import * as app from 'application';

class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationWillFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
        console.logIos('applicationWillFinishLaunchingWithOptions');
        return true;
    }
    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
        console.logIos('applicationDidFinishLaunchingWithOptions');
        return true;
    }
    applicationDidBecomeActive(application: UIApplication): void {
        console.logIos('applicationDidBecomeActive');
    }
    applicationDidEnterBackground(application: UIApplication): void {
        console.logIos('applicationDidEnterBackground');
    }
    applicationWillResignActive(application: UIApplication) {
        console.logIos('applicationWillResignActive');
    }
    applicationWillEnterForeground(application: UIApplication) {
        console.logIos('applicationWillEnterForeground');
    }
    applicationWillTerminate(application: UIApplication) {
        console.logIos('applicationWillTerminate');
    }

}

export const setNativeEvents = () => {
    app.ios.delegate = MyDelegate;
};
