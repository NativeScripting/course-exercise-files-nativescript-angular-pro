import * as app from 'application';
import * as platform from 'platform';

declare var android: any;

export function setStatusBarColors() {
    if (platform.device.sdkVersion >= '21') {
        const View = android.view.View;

        const window = app.android.startActivity.getWindow();
        const decorView = window.getDecorView();
        decorView.setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_DARK_STATUS_BAR
        );
    }
}
