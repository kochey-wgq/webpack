var HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {  //一种写法
//     entry : './Entrance/js/index.js',   //string方式单入口文件
//     output : {
//         path : '/webpack/Pack/',    //必须为成功路径(不可..)
//         filename : 'index.js'
//     },
//     plugins : [  //关联项目
//         new HtmlWebpackPlugin()
//     ]
// }

// module.exports = {  //第二种方式
//     entry : ['./Entrance/js/app.js','./Entrance/js/index.js'],   //同页面引入array不同入口文件
//     output : {
//         path : '/webpack/Pack/',    //必须为成功路径(不可..)
//         filename : 'index.js'
//     },
//     plugins : [
//         new HtmlWebpackPlugin()
//     ]
// }

// module.exports = {  //第三种方式
//     entry : {   //不同页面引入object不同入口文件
//         'app' : './Entrance/js/app.js',
//         'index' : './Entrance/js/index.js'
//     },   
//     output : {  //输出文件
//         path : '/webpack/Pack/',    //必须为成功路径(不可..)
//         filename : '[name].js'      //以键的方式添加
//     },
//     plugins : [
//         new HtmlWebpackPlugin({     //与关联的项目进行结合通信
//             template : './itemH/index.html'
//         })
//     ]
// }


module.exports = {  
    entry : {   //不同页面引入object不同入口文件
        'header' : './Entrance/js/header.js',
        'article' : './Entrance/js/article.js',
        'share' : './Entrance/js/share.js'
    },   
    output : {  //输出文件
        path : '/webpack/Pack/',    //必须为成功路径(不可..)
        filename : 'js/[name].js'      //以键的方式添加
    },
    plugins : [ 
        new HtmlWebpackPlugin({     //与关联的项目进行结合通信
            title : '头部',
            filename : 'header.html',
            template : './itemH/header.html',
            chunks : ['header','share']     //指定的项目地址链接哪个入口文件
        }),
        new HtmlWebpackPlugin({     //与关联的项目进行结合通信
            title : '主体',
            filename : 'article.html',
            template : './itemH/article.html',
            chunks : ['article','share']
        })
    ]
}