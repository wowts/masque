import { LuaObj } from "@wowts/lua";
import { UIFrame } from "@wowts/wow-mock";

export class MasqueSkinGroup {
    public AddButton(frame: UIFrame): void {
    }
}

export class Masque {
    private group: LuaObj<MasqueSkinGroup> = {};
    public Group(name: string): MasqueSkinGroup {
        return this.group[name];
    }
}

const lib = new Masque();
export default lib;
