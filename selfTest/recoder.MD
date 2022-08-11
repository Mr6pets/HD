~~~js
this.$router.push({name:'aa',params:{id:id}})
~~~
 此处this.$router.push有两种方式:params方式和query方式，这两种里面存放的都是传过去的参数，
 区别在于params方式会将传过去的参数和字段加到url上面，

> https:///tald_40297452/article/details/907439256 // 只传递了参数值

query方式传过去的参数和字段加到url上

> http://collection-list?type=1&folder=7895008&key=2   // 字段type、folder key

获取传递的值
~~~js
this.$route.params.id;
~~~

但通过这种params传值的方式，往往一刷新页面，传递的参数就会变成undefined，针对这种情况，应该在path中直接传递参数；或者直接用push方式传值，刷新后，传递的参数依旧存在；

~~~js
{
meta：'学生信息展示'，
name: 'StuInfoShow'
path: 'student/StuInfoShow/:name/:brithday/:class'   // 传递一个参数时只需student/StuInfoShow/:id即可
component: resolve => require([@/views/student/StuInfoShow],resolve)
}
~~~

~~~js
//若传递的params中有个参数是个对象object，则跳转页面后，容易出现[Object object]，此时要对传递参数进行解析，一是要在传递参数地方，对该object进行解析，如：
this.$router.push({ path: '页面路径', query: { obj: JSON.stringify(obj) } })
在使用时，同样要进行解析，如：
obj = JSON.parse(this.$route.query.obj)
~~~

#### 路由传值的方式
方法1：
~~~js
<router-link to="/t?index=1">
<button class="btn btn-default">点击跳转</button>
</router-link>

//获取到值
window.location.href |this.$route.query.index 
~~~

方法2：（http://localhost:8080/t?index=id）
~~~js
其中需要注意，这里的to前面一定要加冒号，path的值要和上面路由定义的值一致，传参用query，里面是参数字典
<router-link :to="{path:'/t',query: {index: 1}}">
 <button class="btn btn-default">点击跳转</button>
</router-link>

//获取值
this.$route.query.index;

~~~

方法3：(跳转路由：http://localhost:8080/t?index=id)
命名路由的方式：
~~~js
<router-link :to="{name:'Test',params: {index: 1}}">
     <button class="btn btn-default">点击跳转</button>
</router-link>

注意这里的name也要和router/index.js中声明的name值一致，并且传参使用params，和name配对的是params，和path配对的是query。

this.$route.params.index;

~~~

方法4:(跳转路由：http://localhost:8080/t/id)
~~~js
<router-link:to="'/test/'+1">
     <button class="btn btn-default">点击跳转</button>
</router-link>

路由形式：
routes:[
 {
   path:'/t/:index',
   name:"test",
   component:test,
   hiddren:true
 }
]


this.$route.params.index
~~~

方法5：
~~~js
<template>
<button @click = "func()">跳转</button>
</template>


<script>
 export default{
    methods:{
        func (){
            this.$router.push({path: '/t?index=1'});
        }
    }
}
</script>

this.$route.query.index
~~~

方法6：
~~~js
<template>
<button @click = "func()">跳转</button>
</template>
<script>
    export default{
        methods:{
            func (){
                this.$router.push({path: '/t',query:{ index:'1'}});
            }
        }
    }
</script>

this.$route.query.index
~~~


方法7：
~~~js

<template>
<button @click = "func()">跳转</button>
</template>
<script>
    export default{
        methods:{
            func (){
                this.$router.push({path: '/t/index'});
            }
        }
    }
</script>

this.$route.query.index
~~~


方法8：
~~~js
<template>
 <button @click = "func()">跳转</button>
</template>
<script>
 export default{
 methods:{
 func (){
 this.$router.push({name: 'Test',params:{ index:'1'}});
}
}
}
</script>


this.$route.params.index
~~~









