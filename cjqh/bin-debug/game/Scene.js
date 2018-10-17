var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super.call(this) || this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onComplete, _this);
        return _this;
    }
    return Scene;
}(eui.Component));
__reflect(Scene.prototype, "Scene");
//# sourceMappingURL=Scene.js.map