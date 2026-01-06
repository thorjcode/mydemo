// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isverify:false,
        verify: false,
        FormData: {
            'Input1': '',
            'Input2': '',
            'Input3': '',
            'Input4': '',
            'Input5': '',
            'Input6': '',
            'Input7': '',
            'Input8': '',
            'Input9': '',
            'Input10': '',
            'Input11': '',
            'Input12': '',
            'Input13': '',
            'Input14': '',
            'Input15': '',
            'Input16': '',
            'Input17': '',
            'Input18': '',
        }
    },

    // 获取输入框数据
    InputData: function (e) {
        let FormData = this.data.FormData
        let id = e.currentTarget.id
        let value = e.detail.value
        FormData[id] = value
        this.setData({
            FormData
        })
    },

    //核验按钮
    verify_buto() {
        let FormData = this.data.FormData
        for (let key in FormData) {
            if (FormData[key] == '') {
                wx.showToast({
                    title: '请把所有数字填写完整',
                    duration: 1000,
                    icon: 'none'
                })
                return;
            }
        }
        this.verify()
    },

    //计算核验
    verify() {
        this.setData({
            isverify: true,
        })
        let FormData = this.data.FormData
        let a = FormData.Input1 * 7
        let b = FormData.Input2 * 9
        let c = FormData.Input3 * 10
        let d = FormData.Input4 * 5
        let e = FormData.Input5 * 8
        let f = FormData.Input6 * 4
        let g = FormData.Input7 * 2
        let h = FormData.Input8 * 1
        let i = FormData.Input9 * 6
        let j = FormData.Input10 * 3
        let k = FormData.Input11 * 7
        let l = FormData.Input12 * 9
        let m = FormData.Input13 * 10
        let n = FormData.Input14 * 5
        let o = FormData.Input15 * 8
        let p = FormData.Input16 * 4
        let q = FormData.Input17 * 2

        let sum = a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q
        console.log('总合：',sum)
        let quotient = sum / 11
        console.log('商：', quotient)
        let remainder = Number(sum)-Number(11) * Number(quotient.toFixed(0)) 
        console.log('余数：', remainder)
        if (remainder == 0) {
            let code = 1
            if (code == FormData.Input18) {
                this.setData({
                    verify: true,
                })
                wx.showToast({
                    title: '验证成功',
                    duration: 1000,
                    icon: "success"
                })
                console.log('验证成功：', remainder, code, FormData.Input18)
            } else {
                this.setData({
                    verify: false,
                })
                wx.showToast({
                    title: '验证失败',
                    duration: 1000,
                    icon: "error"
                })
                console.log('验证失败：', remainder, code, FormData.Input18)
            }
        } else if (remainder == 1) {
            let code = 0
            if (code == FormData.Input18) {
                this.setData({
                    verify: true,
                })
                wx.showToast({
                    title: '验证成功',
                    duration: 1000,
                    icon: "success"
                })
                console.log('验证成功：', remainder, code, FormData.Input18)
            } else {
                this.setData({
                    verify: false,
                })
                wx.showToast({
                    title: '验证失败',
                    duration: 1000,
                    icon: "error"
                })
                console.log('验证失败：', remainder, code, FormData.Input18)
            }

        } else if (remainder == 2) {
            let code = x
            if (code == FormData.Input18) {
                this.setData({
                    verify: true,
                })
                wx.showToast({
                    title: '验证成功',
                    duration: 1000,
                    icon: "success"
                })
                console.log('验证成功：', remainder, code, FormData.Input18)
            } else {
                this.setData({
                    verify: false,
                })
                wx.showToast({
                    title: '验证失败',
                    duration: 1000,
                    icon: "error"
                })
                console.log('验证失败：', remainder, code, FormData.Input18)
            }
        } else if (remainder == 3) {
            let code = 9
            if (code == FormData.Input18) {
                this.setData({
                    verify: true,
                })
                wx.showToast({
                    title: '验证成功',
                    duration: 1000,
                    icon: "success"
                })
                console.log('验证成功：', remainder, code, FormData.Input18)
            } else {
                this.setData({
                    verify: false,
                })
                wx.showToast({
                    title: '验证失败',
                    duration: 1000,
                    icon: "error"
                })
                console.log('验证失败：', remainder, code, FormData.Input18)
            }
        } else if (remainder == 4) {
            let code = 8
            if (code == FormData.Input18) {
                this.setData({
                    verify: true,
                })
                wx.showToast({
                    title: '验证成功',
                    duration: 1000,
                    icon: "success"
                })
                console.log('验证成功：', remainder, code, FormData.Input18)
            } else {
                this.setData({
                    verify: false,
                })
                wx.showToast({
                    title: '验证失败',
                    duration: 1000,
                    icon: "error"
                })
                console.log('验证失败：', remainder, code, FormData.Input18)
            }
        } else if (remainder == 5) {
            let code = 7
            if (code == FormData.Input18) {
                this.setData({
                    verify: true,
                })
                wx.showToast({
                    title: '验证成功',
                    duration: 1000,
                    icon: "success"
                })
                console.log('验证成功：', remainder, code, FormData.Input18)
            } else {
                this.setData({
                    verify: false,
                })
                wx.showToast({
                    title: '验证失败',
                    duration: 1000,
                    icon: "error"
                })
                console.log('验证失败：', remainder, code, FormData.Input18)
            }
        } else if (remainder == 6) {
            let code = 6
            if (code == FormData.Input18) {
                this.setData({
                    verify: true,
                })
                wx.showToast({
                    title: '验证成功',
                    duration: 1000,
                    icon: "success"
                })
                console.log('验证成功：', remainder, code, FormData.Input18)
            } else {
                this.setData({
                    verify: false,
                })
                wx.showToast({
                    title: '验证失败',
                    duration: 1000,
                    icon: "error"
                })
                console.log('验证失败：', remainder, code, FormData.Input18)
            }
        } else if (remainder == 7) {
            let code = 5
            if (code == FormData.Input18) {
                this.setData({
                    verify: true,
                })
                wx.showToast({
                    title: '验证成功',
                    duration: 1000,
                    icon: "success"
                })
                console.log('验证成功：', remainder, code, FormData.Input18)
            } else {
                this.setData({
                    verify: false,
                })
                wx.showToast({
                    title: '验证失败',
                    duration: 1000,
                    icon: "error"
                })
                console.log('验证失败：', remainder, code, FormData.Input18)
            }
        } else if (remainder == 8) {
            let code = 4
            if (code == FormData.Input18) {
                this.setData({
                    verify: true,
                })
                wx.showToast({
                    title: '验证成功',
                    duration: 1000,
                    icon: "success"
                })
                console.log('验证成功：', remainder, code, FormData.Input18)
            } else {
                this.setData({
                    verify: false,
                })
                wx.showToast({
                    title: '验证失败',
                    duration: 1000,
                    icon: "error"
                })
                console.log('验证失败：', remainder, code, FormData.Input18)
            }
        } else if (remainder == 9) {
            let code = 3
            if (code == FormData.Input18) {
                this.setData({
                    verify: true,
                })
                wx.showToast({
                    title: '验证成功',
                    duration: 1000,
                    icon: "success"
                })
                console.log('验证成功：', remainder, code, FormData.Input18)
            } else {
                this.setData({
                    verify: false,
                })
                wx.showToast({
                    title: '验证失败',
                    duration: 1000,
                    icon: "error"
                })
                console.log('验证失败：', remainder, code, FormData.Input18)
            }
        } else if (remainder == 10) {
            let code = 2
            if (code == FormData.Input18) {
                this.setData({
                    verify: true,
                })
                wx.showToast({
                    title: '验证成功',
                    duration: 1000,
                    icon: "success"
                })
                console.log('验证成功：', remainder, code, FormData.Input18)
            } else {
                this.setData({
                    verify: false,
                })
                wx.showToast({
                    title: '验证失败',
                    duration: 1000,
                    icon: "error"
                })
                console.log('验证失败：', remainder, code, FormData.Input18)
            }
        }

    },

    // 重置按钮
    cz_buto() {
        console.log('重置按钮')
        this.setData({
            isverify:false,
            verify: false,
            FormData: {
                'Input1': '',
                'Input2': '',
                'Input3': '',
                'Input4': '',
                'Input5': '',
                'Input6': '',
                'Input7': '',
                'Input8': '',
                'Input9': '',
                'Input10': '',
                'Input11': '',
                'Input12': '',
                'Input13': '',
                'Input14': '',
                'Input15': '',
                'Input16': '',
                'Input17': '',
                'Input18': '',
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})