abstract class Scene extends eui.Component{
	public constructor() {
		super();
		// 监听组件创建完毕 也就是场景的外观创建完毕
		this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.onComplete,this);
	}
	 protected abstract onComplete();
}