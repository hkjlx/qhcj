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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/game/GameScene.exml";
        return _this;
    }
    GameScene.prototype.onComplete = function () {
        this.btn_qh3.touchEnabled = true;
        this.btn_qh3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
    };
    GameScene.prototype.onTapqiehuan = function () {
        var s1 = new EndScene();
        //切换到最后的场景
        SceneManager.Instance.changeScene(s1);
    };
    return GameScene;
}(Scene));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map