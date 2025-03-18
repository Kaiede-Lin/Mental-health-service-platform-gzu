package com.Gzu2304.pojo;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("user") // 指定数据库表名
public class User {
    private Long id; // 主键
    private String nickname; // 昵称
    private String phone; // 手机号
    private String code; // 密码
    @TableField("invite_code") // 数据库字段名与实体类字段名不一致时使用
    private String inviteCode; // 验证码
}