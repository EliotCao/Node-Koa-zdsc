module.exports = {
    userFormatError: {
        code: '10001',
        message: '用户名或密码为空',
        request: ''
    },
    userAlreadyExist: {
        code: '10001',
        message: '用户已经存在',
        request: ''
    },
    userRegisterError: {
        code: '10003',
        message: '用户注册错误',
        result: ''
    },
    userNotExist: {
        code: '10004',
        message: '用户不存在',
        result: ''
    },
    userLoginError: {
        code: '10005',
        message: '用户登录失败',
        result: ''
    },
    userInvalidPassword: {
        code: '10006',
        message: '用户密码错误',
        result: ''
    },
    tokenExpiredError: {
        code: '10101',
        message: 'token已过期',
        result: ''
    },
    invalidToken: {
        code: '10102',
        message: '无效token',
        result: ''
    }
}