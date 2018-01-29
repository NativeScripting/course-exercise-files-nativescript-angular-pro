import * as app from 'application';

export const setNativeEvents = () => {
    app.android.on(app.AndroidApplication.activityCreatedEvent, (args: app.AndroidActivityBundleEventData) => {
        console.logAndroid(args.eventName);
    });
    app.android.on(app.AndroidApplication.activityStartedEvent, function (args: app.AndroidActivityEventData) {
        console.logAndroid(args.eventName);
    });
    app.android.on(app.AndroidApplication.activityDestroyedEvent, function (args: app.AndroidActivityEventData) {
        console.logAndroid(args.eventName);
    });
    app.android.on(app.AndroidApplication.activityBackPressedEvent, function (args: app.AndroidActivityEventData) {
        console.logAndroid(args.eventName);
    });
    app.android.on(app.AndroidApplication.activityPausedEvent, function (args: app.AndroidActivityEventData) {
        console.logAndroid(args.eventName);
    });
    app.android.on(app.AndroidApplication.activityResumedEvent, function (args: app.AndroidActivityEventData) {
        console.logAndroid(args.eventName);
    });
    app.android.on(app.AndroidApplication.activityStoppedEvent, function (args: app.AndroidActivityEventData) {
        console.logAndroid(args.eventName);
    });
    app.android.on(app.AndroidApplication.saveActivityStateEvent, function (args: app.AndroidActivityEventData) {
        console.logAndroid(args.eventName);
    });
    app.android.on(app.AndroidApplication.activityResultEvent, function (args: app.AndroidActivityEventData) {
        console.logAndroid(args.eventName);
    });
};
