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














