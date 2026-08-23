// Minimal OffscreenCanvas polyfill for renderer environments (browser/WebView)
(function(global){
    // In some Chromium/WebView environments, OffscreenCanvas is exposed as a
    // global lexical binding initialized late; reading it synchronously at startup
    // (even via typeof global.OffscreenCanvas) throws "Cannot access
    // 'OffscreenCanvas' before initialization" (TDZ). Descriptor lookup plus
    // try/catch avoids triggering it.
    let nativeWorks = false;
    try {
        if (Object.getOwnPropertyDescriptor(global, 'OffscreenCanvas')) {
            const testCanvas = new global.OffscreenCanvas(1, 1);
            const testCtx = testCanvas.getContext('2d');
            nativeWorks = !!testCtx; // Native implementation works
        }
    } catch(e) {}
    if (nativeWorks) return;

    const hasDocument = typeof document !== 'undefined';
    if (!hasDocument) {
        console.warn('OffscreenCanvas polyfill: no DOM available, canvas operations will be limited');
    }

    class OffscreenCanvas {
        constructor(w, h){
            this._canvas = hasDocument ? document.createElement('canvas') : null;
            if (this._canvas) { this._canvas.width = w; this._canvas.height = h }
            Object.defineProperty(this, 'width', { get: () => this._canvas ? this._canvas.width : w, set: v => { if (this._canvas) this._canvas.width = v } });
            Object.defineProperty(this, 'height', { get: () => this._canvas ? this._canvas.height : h, set: v => { if (this._canvas) this._canvas.height = v } });
        }
        getContext(type, opts){
            return this._canvas ? this._canvas.getContext(type, opts) : null;
        }
        convertToBlob(options){
            return new Promise((resolve) => {
                if (!this._canvas) return resolve(new Blob());
                this._canvas.toBlob(resolve, options && options.type, options && options.quality);
            });
        }
    }

    try {
        global.OffscreenCanvas = OffscreenCanvas;
    } catch(e) {
        try {
            Object.defineProperty(global, 'OffscreenCanvas', { value: OffscreenCanvas, writable: true, configurable: true });
        } catch(e2) {}
    }
})(typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : globalThis));
