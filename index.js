"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MasqueSkinGroup {
    AddButton(frame) {
    }
}
exports.MasqueSkinGroup = MasqueSkinGroup;
class Masque {
    constructor() {
        this.group = {};
    }
    Group(name) {
        return this.group[name];
    }
}
exports.Masque = Masque;
const lib = new Masque();
exports.default = lib;
