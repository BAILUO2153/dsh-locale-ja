import type { Context as ClientContext } from "@deepseek-ai/cordis";
import { DICTS } from "./dictionaries.ts";
import { createFontStylesheet } from "./font.ts";
import { extendLocaleService, isJapaneseActive, JA } from "./locale-extension.ts";

export const inject = ["locale"];

export function apply(ctx: ClientContext): void {
  const { locale } = ctx;

  ctx.effect(() => {
    const disposers: Array<() => void> = [];
    const dispose = (): void => {
      for (let index = disposers.length - 1; index >= 0; index -= 1) disposers[index]?.();
    };
    try {
      for (const [ns, dict] of Object.entries(DICTS)) {
        disposers.push(locale.register(ns, JA, dict));
      }
    } catch (error) {
      // A failed effect has no returned disposer for Cordis to run.
      dispose();
      throw error;
    }
    return dispose;
  }, "locale-ja: japanese dictionaries");

  // Dictionaries must land before the language exists: a stored `ja`
  // preference re-resolves on registration and would otherwise flip the UI
  // onto English fallback copy.
  ctx.effect(() => extendLocaleService(locale), "locale-ja: selectable ja locale");

  ctx.effect(() => {
    const font = createFontStylesheet();
    const sync = (): void => {
      font.sync(isJapaneseActive(locale));
    };
    let unsubscribe: () => void;
    try {
      sync();
      unsubscribe = locale.subscribe(sync);
    } catch (error) {
      font.dispose();
      throw error;
    }
    return () => {
      unsubscribe();
      font.dispose();
    };
  }, "locale-ja: japanese font");
}
