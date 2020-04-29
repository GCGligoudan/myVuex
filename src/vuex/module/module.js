import { forEachValue } from '../until';

export default class Module {
  constructor(rawModlue) {
    this.state = rawModlue.state || {};
    this._rawModule = rawModlue;
    this._chidren = rawModlue.modules;
    this._namespaced = !!rawModlue.namespaced
  }

  getChild(key) {
    return this._chidren[key];
  }

  forEachChild(fn) {
    if (this._chidren) {
      forEachValue(this._chidren, (childModule, moduleName) => fn(childModule, moduleName))
    }
  }

  forEachGetter(fn) {
    const getters = this._rawModule.getters;
    if(getters) {
      forEachValue(getters, (getterFn, getterName) => fn(getterFn, getterName))
    }
  }
}