import { UIFrame } from "@wowts/wow-mock";
export declare class MasqueSkinGroup {
    AddButton(frame: UIFrame): void;
}
export declare class Masque {
    private group;
    Group(name: string): MasqueSkinGroup;
}
declare const lib: Masque;
export default lib;
