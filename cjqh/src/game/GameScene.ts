class GameScene extends Scene {
	public btn_qh3: eui.Label;

	public constructor() {
		super();
		this.skinName = "resource/game/GameScene.exml";
	}
	protected onComplete() {
		this.btn_qh3.touchEnabled = true;
		this.btn_qh3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
	}
	private onTapqiehuan() {
		let s1:EndScene =  new EndScene();
		//切换到最后的场景
        SceneManager.Instance.changeScene(s1);
	}
}