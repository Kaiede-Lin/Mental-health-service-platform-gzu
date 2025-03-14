package com.Gzu2304;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.Gzu2304.mapper")
@SpringBootApplication
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}