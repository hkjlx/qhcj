class Tanchu extends Scene{
	public btn_close:eui.Label;

	public constructor() {
		super();
		this.skinName = "resource/game/tanchu.exml";
	}
	protected onComplete() {
		this.btn_close.touchEnabled = true;
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapclose, this);
	}
	private onTapclose() {
		SceneManager.Instance.popScene();
	}
}