/**
 * In edge runtime, these props directly accessed from environment variables.
 *   - local: env vars will be injected through edge-runtime as runtime env vars
 *   - deployment: env vars will be replaced by edge build pipeline
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getEdgePreviewProps", {
    enumerable: true,
    get: function() {
        return getEdgePreviewProps;
    }
});
function getEdgePreviewProps() {
    return {
        previewModeId: process.env.NODE_ENV === 'production' ? process.env.__NEXT_PREVIEW_MODE_ID : 'development-id',
        previewModeSigningKey: process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY || '',
        previewModeEncryptionKey: process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY || ''
    };
}

//# sourceMappingURL=get-edge-preview-props.js.map