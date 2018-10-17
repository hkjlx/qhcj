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
var Tanchu = (function (_super) {
    __extends(Tanchu, _super);
    function Tanchu() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/game/tanchu.exml";
        return _this;
    }
    Tanchu.prototype.onComplete = function () {
        this.btn_close.touchEnabled = true;
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapclose, this);
    };
    Tanchu.prototype.onTapclose = function () {
        SceneManager.Instance.popScene();
    };
    return Tanchu;
}(Scene));
__reflect(Tanchu.prototype, "Tanchu");
//# sourceMappingURL=Tanchu.js.map