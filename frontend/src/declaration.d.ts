export { };

declare module "solid-js" {
    namespace JSX {
        interface IntrinsicElements {
            "x-entity": JSX.IntrinsicElements["div"] & { [key: string]: any };
        }
    }
}