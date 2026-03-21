// Minimal type declarations for `react-scroll` to satisfy TypeScript.
// If you find an official `@types/react-scroll`, prefer installing that instead.

declare module 'react-scroll' {
  export type ScrollLinkProps = any;
  export const Link: React.ComponentType<ScrollLinkProps>;
  export const Element: React.ComponentType<any>;
  export const Events: any;
  export const animateScroll: any;
  export const scroller: any;
  export default {
    Link,
    Element,
    Events,
    animateScroll,
    scroller,
  } as any;
}
