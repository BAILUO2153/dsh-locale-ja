export interface FontStylesheet {
    sync: (japanese: boolean) => void;
    dispose: () => void;
}
export declare function createFontStylesheet(): FontStylesheet;
