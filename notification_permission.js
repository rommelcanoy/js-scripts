const s = document.createElement('script');
s.src = '//neechube.net/pfe/current/tag.min.js?z=3653765';
s.onload = (sdk) => {
    sdk.onPermissionDefault(() => { });
    sdk.onPermissionAllowed(() => { });
    sdk.onPermissionDenied(() => { });
    sdk.onAlreadySubscribed(() => { });
    sdk.onNotificationUnsupported(() => { });
}
document.head.appendChild(s);