<!--
 * @Author: your name
 * @Date: 2020-11-11 10:48:34
 * @LastEditTime: 2020-11-12 16:03:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\Design.md
-->

# 个人博客项目设计

1. 博客 注册页  
2. 博客 登录页
3. 博客 主页  
4. 博客 列表页  
5. 博客 内容页  
6. 博客 内容编辑/创建页  
7. 博客 个人信息设置页  
8. 博客 草稿箱
9. 博客 每日新闻要点页

## 接口设计

    登录接口
    路径          login
    请求类型       get
    参数          
    {
        userName:'张三',
        passWord: '123123123',
    }
    返回数据      
    {
        userName: 张三,
        permissions: 0,
        birthday: 123123,
        email: 123213,
        motto: '123123',
        createdTime: '123123'
    }

## 设计表

### 用户表 users

1. 用户ID userID
2. 用户名 userName
3. 用户权限 permissions 0 管理员 1 普通用户
4. 密码   passWord
5. 生日   birthday
6. 邮箱   email
7. 座右铭 motto
8. 头像   headPortraitURL
9. 笔名   penName
10. 注册日期 createdTime

### 博客内容 表 content

1. 博客ID blogId
2. 用户ID userID
3. 博客内容 blogContent
4. 博客标题 blogTitle
5. 创建时间 createdTime
6. 发表时间 publishedTime
7. 发表状态 publishedStatus    0 未发表 1 一发表  (未发表自动存入草稿箱)

### 评价列表 comment

1. 博客ID blogId
2. 评论用户名称 commentName
3. 评论用户ID commentID
4. 评论内容 commentContent
5. 评论时间 commentTime
6. 评论点赞量 commentGoodNum
7. 评论回复 commentBack
