console.log('分线程开始');

// 使用onmessage监听是否有向当前线程传入数据的事件
// this代表当前线程对象
this.onmessage = function (event) {
    // 在事件event对象中的data属性中保存了接收的数据
    var sum = 0;
    for (var i = 0; i < event.data/100; i++) {
        sum += Math.sqrt(event.data);
    }

    // 向主线程传入计算的值
    postMessage(sum);

    console.log('分线程结束');
    // 关闭当前线程，释放内存空间
    close();
}