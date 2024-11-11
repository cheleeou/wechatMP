// index.js
Page({
  data: {
    inputText: '',
    response: '',
    loading: false
  },

  onInput(e) {
    this.setData({
      inputText: e.detail.value
    });
  },

  async handleSubmit() {
    if (!this.data.inputText.trim()) {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      });
      return;
    }

    this.setData({ loading: true });

    try {
      // 这里需要替换为实际的Coze API调用
      const result = await wx.cloud.callFunction({
        name: 'callCozeAPI',
        data: {
          message: this.data.inputText
        }
      });

      this.setData({
        response: result.result.response,
        loading: false
      });
    } catch (error) {
      console.error('API调用失败:', error);
      wx.showToast({
        title: '请求失败，请稍后重试',
        icon: 'none'
      });
      this.setData({ loading: false });
    }
  }
});
