new Vue({
    el: '#app',
    data: {
        nickname: '',
        phone: '',
        code: '',
        inviteCode: ''
    },
    methods: {
        getCode() {
            // 这里可以调用后端API获取验证码
            alert('验证码已发送');
        },
        register() {
            const userData = {
                nickname: this.nickname,
                phone: this.phone,
                code: this.code,
                inviteCode: this.inviteCode
            };
            // 这里可以调用后端API进行注册
            fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('注册成功');
                        window.location.href = './login.html'
                    } else {
                        alert('注册失败: ' + data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }
});