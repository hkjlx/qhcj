class StartScene extends Scene {
		public btn_tc: eui.Label;//弹出层按钮
		public btn_qh2: eui.Label;//切换场景


		public constructor() {
			super();
			this.skinName = "resource/game/StartScene.exml";
		}
		protected onComplete() {
			this.btn_tc.touchEnabled = true;
			this.btn_qh2.touchEnabled = true;
			this.btn_tc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTaptc, this);
			this.btn_qh2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);
		}
		//弹出场景
		private onTaptc(){
				let tc:Tanchu = new Tanchu();
				SceneManager.Instance.pushScene(tc);
		}
		private onTapqiehuan(){
				let s1:GameScene =  new GameScene();
				//切换到第二个场景
        SceneManager.Instance.changeScene(s1);
		}
}