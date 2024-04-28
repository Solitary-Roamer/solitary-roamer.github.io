---
title: "Blog: Hugo stack theme setup and Markdown"
date: 2023-03-06T22:41:53+03:00
draft: true
description: ""
image: 
license: 
hidden: false
comments: true
categories: ["",""]
tags: ["Tech",""]
links:
  - title: GitHub
    description: GitHub is the world's largest software development platform.
    website: https://github.com
    image: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png
  - title: TypeScript
    description: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
    website: https://www.typescriptlang.org
    image: https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg
---

## FrontMatter Example

```python
title: "How to use hugo to create personal blog"
description: ""
date: 2021-12-02T13:42:48+08:00
image: https://images.unsplash.com/photo-1593339595642-235dbd27e7f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3868&q=80
license: 
hidden: false
comments: false
draft: true 
categories: [""]
tags: ["tech","life"]
```

## 如何在本地生成预览网页

在根目录运行下面代码

```python
hugo server -t hugo-theme-stack --buildDrafts 
```

## How to post new blogs

新建post
```python
hugo new post/FileName.md 
```
push到repo以生成网页
```python
hugo --theme=hugo-theme-stack --baseUrl="https://fakeutopia.github.io/" --buildDrafts

cd public

git add .
git commit -m "init commit"
git push -u origin main
```

-u报错时，可用-f替换，强行push
```python
git push -f origin main
```

## How to use links in article's end

To use this feature, add `links` section to frontmatter.

This page's frontmatter:

```yaml
links:
  - title: GitHub
    description: GitHub is the world's largest software development platform.
    website: https://github.com
    image: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png
  - title: TypeScript
    description: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
    website: https://www.typescriptlang.org
    image: https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg
```

`image` field accepts both local and external images.

## How to transfer to other devices (MacOS)

1. 复制根目录文件夹 `/Users/lockscreen username/github username` 到新设备的相同根目录下 `/Users/lockscreen username/github username` (锁屏用户名若不相同，设置会相对麻烦一点，不过基本一致)
2. 在本地生成 `hugo server -t hugo-theme-stack --buildDrafts`
3. 初次推送到GitHub仓库，运行如下代码：
```
hugo --theme=hugo-theme-stack --baseUrl="https://fakeutopia.github.io/" --buildDrafts

git init
git add .
git commit -m "init commit"
git remote add origin https://github.com/fakeutopia/fakeutopia.github.io.git
git push -u origin main

git push -f origin main
```
上面最后一行`git push -f origin main`为强制执行，可在出现 failed to push some refs to Error: failed to push some refs to 时操作

4. 若出现`fatal: Authentication failed for 'https://github.com/fakeutopia/fakeutopia.github.io.git/'`，可用获取`Personal token`的方式解决（[看这里](https://ginnyfahs.medium.com/github-error-authentication-failed-from-command-line-3a545bfd0ca8)）

&nbsp;

## Work to be continued

1. 添加评论区 &nbsp;  ❌ （舍弃，不实用）

2. 把文章全部导上去

3. 备份Hugo所有文件

4. GitHub Actions 自动部署  &nbsp; ❌ （待操作）

5. 加入盘古之白 &nbsp; ❌ （舍弃，不实用） (update: 事实证明，可以增加美观度)

6. ...

&nbsp;

## Markdown tips
### HTML 前后缀
注意：下面实际上是双括号
```
{<codehtml>} code {</codehtml>}
```

### 插入图片 - Github + PicGo
#### Why
Github可以用作图床，PicGo可以用来自动上传图片以及自动生成链接到剪切板。

####  GitHub配置
1. 先在GitHub创建一个public repo，例如 blog-image;
2. 创建一个personal token，专门用来上传图片

#### PicGo配置
1. PicGo下载：安装好Homebrew后，直接用命令行`brew install picgo --cask`即可安装
2. 软件设置：[点击这里](https://picgo.github.io/PicGo-Doc/zh/guide/config.html)
3. macOS中，PicGo会出现在顶边栏，直接拖拽图片到图标中即可上传，之后即可粘贴到markdown文件中（也可以直接上传剪切板中的文件）。注意：若要连续上传，需要在两张图片之间有空格。

#### 代码
```
    <center>
        <img style="border-radius: 0.5em;" 
        src="https://raw.githubusercontent.com/fakeutopia/blog-image/main/IMG_7564.jpg" width="40%">
        <div style="color: #999; padding: 0px;">Flower bloom</div>
        <br>
        <img style="border-radius: 0.5em;" 
        src="https://raw.githubusercontent.com/fakeutopia/blog-image/main/IMG_7726.jpg" width="40%">
        <div style="color: #999; padding: 0px;">Flower decay</div>
    </center>
```

&nbsp;

{{<codehtml>}}
    <center>
        <img style="border-radius: 0.5em;" 
        src="https://raw.githubusercontent.com/fakeutopia/blog-image/main/5308467276_58cc19e551_o.jpg" width="70%">
        <div style="color: #999; padding: 0px;">Woman in snow</div>
        <br>
        <img style="border-radius: 0.5em;" 
        src="https://images.unsplash.com/photo-1608845920884-3c88800feebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" width="600">
        <div style="color: #999; padding: 0px;">Boston</div>
    </center>
{{</codehtml>}}

### Markdown常用命令
#### 插入超链接
`[超链接文字](url)` 
#### 加粗
`**文字**`
#### 倾斜
`*文字*`
#### 下划线
{{<codehtml>}}<u>下划线</u>{{</codehtml>}}
#### 删除线
{{<codehtml>}}<del>删除线</del>{{</codehtml>}}
#### 前景色
{{<codehtml>}}<span style="color: orange">前景色</span>{{</codehtml>}}
#### 背景色
{{<codehtml>}}<span style="background: orange">背景色</span>{{</codehtml>}}

### 综合
***{{<codehtml>}}<span style="background: pink"><span style="color: grey"><u><del>我是一段被用来展示的文字</del></u></span></span>{{</codehtml>}}***