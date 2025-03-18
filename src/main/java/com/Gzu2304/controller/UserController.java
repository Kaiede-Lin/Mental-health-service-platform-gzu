package com.Gzu2304.controller;

import com.Gzu2304.ApiResponse;
import com.Gzu2304.mapper.UserMapper;
import com.Gzu2304.pojo.User;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserMapper userMapper;

    @PostMapping("/register")
    public ApiResponse register(@RequestBody User user) {
        try {
            // 1. 检查用户是否已存在（根据手机号）

            // 2. 插入新用户
            int result = userMapper.insert(user);
            if (result > 0) {
                return new ApiResponse(true, "注册成功");
            } else {
                return new ApiResponse(false, "注册失败");
            }
        } catch (Exception e) {
            e.printStackTrace(); // 打印异常信息
            return new ApiResponse(false, "服务器内部错误");
        }
    }

    @PostMapping("/login")
    public ApiResponse login(@RequestBody User user) {
        // 1. 根据手机号查询用户
        User existingUser = userMapper.selectOne(
                new QueryWrapper<User>().eq("phone", user.getPhone())
        );

        // 2. 检查用户是否存在
        if (existingUser == null) {
            return new ApiResponse(false, "用户不存在");
        }

        // 3. 检查验证码是否正确
        if (!existingUser.getCode().equals(user.getCode())) {
            return new ApiResponse(false, "验证码错误");
        }

        // 4. 登录成功
        return new ApiResponse(true, "登录成功");
    }
}