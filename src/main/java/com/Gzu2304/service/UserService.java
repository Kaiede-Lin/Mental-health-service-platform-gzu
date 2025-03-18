package com.Gzu2304.service;

import com.Gzu2304.pojo.User;
import com.baomidou.mybatisplus.extension.service.IService;

public interface UserService extends IService<User> {
    boolean register(User user);
}