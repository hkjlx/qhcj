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
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/game/StartScene.exml";
        return _this;
    }
    StartScene.prototype.onComplete = function () {
        this.btn_tc.touchEnabled = true;
        this.btn_qh2.touchEnabled = true;
        this.btn_tc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTaptc, this);
        this.btn_qh2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
    };
    //弹出场景
    StartScene.prototype.onTaptc = function () {
        var tc = new Tanchu();
        SceneManager.Instance.pushScene(tc);
    };
    StartScene.prototype.onTapqiehuan = function () {
        var s1 = new GameScene();
        //切换到第二个场景
        SceneManager.Instance.changeScene(s1);
    };
    return StartScene;
}(Scene));
__reflect(StartScene.prototype, "StartScene");
//# sourceMappingURL=StartScene.js.map