new Vue({
    el: '#login', // 确保挂载点是 id="login"
    data: {
        phone: '', // 手机号
        code: ''   // 验证码
    },
    methods: {
        login() {
            const loginData = {
                phone: this.phone,
                code: this.code
            };

            // 调用后端登录接口
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('登录成功');
                        window.location.href = './web.html'; // 跳转到主界面
                    } else {
                        alert('登录失败: ' + data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }
});
