/// <reference types="vite/client" />

interface Window {
  iFrameResize?: (options: object, target: HTMLElement) => void
  grecaptcha: {
    ready: (cb: () => void) => void
    execute: (siteKey: string, options: { action: string }) => Promise<string>
  }
}
