import { HTMLElement as _HTMLElement1 } from "components/HTMLElement";
declare function set(key: string, value: string): void;
declare function get(key: string): any;
export const Store: {
    set: typeof set;
    get: typeof get;
};
declare function add(emoji: {
    id: string;
}): void;
declare function _get1({ maxFrequentRows, perLine }: {
    maxFrequentRows: any;
    perLine: any;
}): any[];
export const FrequentlyUsed: {
    add: typeof add;
    _get1: typeof _get1;
    DEFAULTS: string[];
};
declare function _add1(emoji: {
    id: string;
}): void;
declare function remove(emoji: {
    id: string;
}): void;
declare function toggle(emoji: {
    id: string;
}): {
    added: boolean;
};
declare function _get2(): string[];
declare function has(emojiId: string): boolean;
declare function _set1(emojiIds: string[]): void;
export const Favorites: {
    _add1: typeof _add1;
    remove: typeof remove;
    toggle: typeof toggle;
    _get2: typeof _get2;
    has: typeof has;
    _set1: typeof _set1;
};
export let I18n: any;
export let Data: any;
export function init(options: any, { caller }?: {
    caller: any;
}): Promise<void>;
declare function _get3(emojiId: any): any;
declare function reset(): void;
declare function search(value: any, { maxResults, caller }?: {
    maxResults: any;
    caller: any;
}): Promise<any>;
export const SearchIndex: {
    search: typeof search;
    _get3: typeof _get3;
    reset: typeof reset;
    SHORTCODES_REGEX: RegExp;
};
export const SafeFlags: string[];
export function getEmojiDataFromNative(nativeString: any): Promise<any>;
declare const WindowHTMLElement: ObjectConstructor | {
    new (): HTMLElement;
    prototype: HTMLElement;
};
declare class HTMLElement extends WindowHTMLElement {
    static get observedAttributes(): string[];
    constructor(props?: {});
    update(props?: {}): void;
    attributeChangedCallback(attr: any, _: any, newValue: any): void;
    disconnectedCallback(): void;
}
declare class ShadowElement extends HTMLElement {
    constructor(props: any, { styles }?: {
        styles: any;
    });
    setShadow(): void;
    injectStyles(styles: any): void;
}
export class Emoji extends _HTMLElement1 {
    static Props: {
        fallback: string;
        id: string;
        native: string;
        shortcodes: string;
        size: {
            value: string;
            transform: (value: any) => any;
        };
        set: {
            value: string;
            choices: string[];
        };
        skin: {
            value: number;
            choices: number[];
        };
    };
    constructor(props: any);
    connectedCallback(): Promise<void>;
    component: any;
}
export class Picker extends ShadowElement {
    static Props: {
        autoFocus: {
            value: boolean;
        };
        dynamicWidth: {
            value: boolean;
        };
        emojiButtonColors: {
            value: any;
        };
        emojiButtonRadius: {
            value: string;
        };
        emojiButtonSize: {
            value: number;
        };
        emojiSize: {
            value: number;
        };
        emojiVersion: {
            value: number;
            choices: number[];
        };
        exceptEmojis: {
            value: any[];
        };
        icons: {
            value: string;
            choices: string[];
        };
        locale: {
            value: string;
            choices: string[];
        };
        maxFrequentRows: {
            value: number;
        };
        navPosition: {
            value: string;
            choices: string[];
        };
        noCountryFlags: {
            value: boolean;
        };
        noResultsEmoji: {
            value: any;
        };
        perLine: {
            value: number;
        };
        previewEmoji: {
            value: any;
        };
        previewPosition: {
            value: string;
            choices: string[];
        };
        searchPosition: {
            value: string;
            choices: string[];
        };
        set: {
            value: string;
            choices: string[];
        };
        skin: {
            value: number;
            choices: number[];
        };
        skinTonePosition: {
            value: string;
            choices: string[];
        };
        theme: {
            value: string;
            choices: string[];
        };
        categories: any;
        categoryIcons: any;
        custom: any;
        data: any;
        favorites: any;
        i18n: any;
        getImageURL: any;
        getSpritesheetURL: any;
        onAddCustomEmoji: any;
        onClickOutside: any;
        onEmojiSelect: any;
        onFavoriteChange: any;
        maxFavorites: {
            value: number;
        };
        longPressDuration: {
            value: number;
        };
        stickySearch: {
            deprecated: boolean;
            value: boolean;
        };
    };
    constructor(props: any);
    connectedCallback(): Promise<void>;
}
export { default as PickerStyles } from 'bundle-text:./PickerStyles.scss';

//# sourceMappingURL=index.d.ts.map
