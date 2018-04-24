import * as app from 'application';
import { setNativeEvents } from './app-events-native';
import { setStatusBarColors } from '../utils';

export const setAppEvents = () => {

    setNativeEvents();

    app.on(app.launchEvent, (args: app.ApplicationEventData) => {
        console.logNativeScript(args.eventName);
    });
    app.on(app.displayedEvent, function (args: app.ApplicationEventData) {
        console.logNativeScript(args.eventName);
    });
    app.on(app.suspendEvent, function (args: app.ApplicationEventData) {
        console.logNativeScript(args.eventName);
    });
    app.on(app.resumeEvent, function (args: app.ApplicationEventData) {
        console.logNativeScript(args.eventName);
        setStatusBarColors();
    });
    app.on(app.exitEvent, function (args: app.ApplicationEventData) {
        console.logNativeScript(args.eventName);
    });
    app.on(app.lowMemoryEvent, function (args: app.ApplicationEventData) {
        console.logNativeScript(args.eventName);
    });
    app.on(app.uncaughtErrorEvent, function (args: app.ApplicationEventData) {
        console.logNativeScript(args.eventName);
    });
    app.on(app.orientationChangedEvent, function (args: app.ApplicationEventData) {
        console.logNativeScript(args.eventName);
    });
};
