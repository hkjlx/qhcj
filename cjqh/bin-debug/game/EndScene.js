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
var EndScene = (function (_super) {
    __extends(EndScene, _super);
    function EndScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/game/EndScene.exml";
        return _this;
    }
    EndScene.prototype.onComplete = function () {
        this.btn_fh.touchEnabled = true;
        this.btn_fh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
    };
    EndScene.prototype.onTapqiehuan = function () {
        var s1 = new StartScene();
        //切换回最开始的场景
        SceneManager.Instance.changeScene(s1);
    };
    return EndScene;
}(Scene));
__reflect(EndScene.prototype, "EndScene");
//# sourceMappingURL=EndScene.js.map