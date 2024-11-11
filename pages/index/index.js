// index.js
Page({
  data: {
    inputText: '',
    imageUrl: ''
  },

  // 输入框输入事件处理
  handleInput(e) {
    this.setData({
      inputText: e.detail.value
    })
  },

  // 提交按钮点击事件处理
  handleSubmit() {
    if (!this.data.inputText) {
      wx.showToast({
        title: '请输入文字',
        icon: 'none'
      })
      return
    }

    // TODO: 这里需要替换为实际的coze API调用
    wx.showLoading({
      title: '生成中...',
    })

    // 模拟API调用
    setTimeout(() => {
      wx.hideLoading()
      // 这里后续需要替换为真实的API调用
      console.log('用户输入:', this.data.inputText)
    }, 1000)
  }
})
