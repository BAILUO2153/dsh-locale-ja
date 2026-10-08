import type { LocaleRuntime } from "@deepseek-ai/dsh-client-locale/client";
export declare const JA = "ja";
export declare function isJapaneseActive(locale: LocaleRuntime): boolean;
export declare function extendLocaleService(locale: LocaleRuntime): () => void;
