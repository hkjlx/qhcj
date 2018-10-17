class EndScene extends Scene {
	public btn_fh:eui.Label;

	public constructor() {
		super();
		this.skinName = "resource/game/EndScene.exml";
	}
	protected onComplete() {
		this.btn_fh.touchEnabled = true;
		this.btn_fh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
	}
	private onTapqiehuan() {
		let s1:StartScene =  new StartScene();
		//切换回最开始的场景
        SceneManager.Instance.changeScene(s1);
	}
}