import { Editor } from './../models';
export declare class CheckboxEditor implements Editor {
    private args;
    $input: any;
    defaultValue: boolean;
    constructor(args: any);
    init(): void;
    destroy(): void;
    focus(): void;
    loadValue(item: any): void;
    preClick(): void;
    serializeValue(): boolean;
    applyValue(item: any, state: any): void;
    isValueChanged(): boolean;
    validate(): {
        valid: boolean;
        msg: any;
    };
}
