/***************************************************/
// let obj={name:"alvis", age:18};
// let a={...obj,lang:"zh"}
// console.log(a,"999")// { name: 'alvis', age: 18, lang: 'zh' }
/***************************************************/

/********************function的配置项变更****************************/
// function setConfig(params){
//     let config={
//         type:'*.jpeg,*.png',
//         size:20000
//     }
//     config={...config,...params};
//     console.log(config,"alvis")
// }
// let config={
//     type:"*.gif"
// }
// setConfig(config);//{ type: '*.gif', size: 20000 } alvis

/************************************************/

/********************************************/
// let {name,age}={name:"alvis",age:18};
// console.log(name,age);
// console.log("姓名是"+name,"年龄是："+age);
/********************************************/

/*******************************************复杂的解构*******************************************/
// let compObj={
//     name:"alvis",
//     lession:{
//         title:"javascript"
//     }
// }
// let {name,lession:{title}}=compObj;
// console.log(name,title);//alvis javascript
/**************************************************************************************/


/*****************解构属性合并************/
// function creatElemnt(options={}){
//     let {width=200 , height= 200 , backgroundColor="red" }=options;
//     console.log("alvis",width,height,backgroundColor);
//     const div=document.createElement("div");
//     div.style.width=width+"px";
//     div.style.height=height+"px";
//     div.style.backgroundColor=backgroundColor;
//     document.body.appendChild(div);
// }
// creatElemnt({width:500,height:300,backgroundColor:"lightblue"});
/***************************************************************************/

/*************************/
// 例子：数组
// let arr=["alvis","single"];
// console.log(arr);
// // 看自己的属性无法看父亲
// console.log(mark=arr.hasOwnProperty("length"));//true;
// console.log(mark=arr.hasOwnProperty("concat"));//false;
// console.log('length' in arr);//true//这个方法检测自己和父亲(原型)
// console.log('concat' in arr);//true//这个方法检测自己和父亲(原型)

// 例子：对象
// let a={name:"alvis"};
// let b={url:"www.helloworld.com"};
// Object.setPrototypeOf(a,b);//将b指定为a放父级
// console.log(a.hasOwnProperty("url"))//false 无法查看父级
// console.log('url' in a);//true in的方法可以查询父亲

// 通过函数可以检测
// function oss(options={}){
//     if(!options.hasOwnProperty('host')){
//         throw new Error("需要设置主机名")
//     }else{
//         console.log("有主机")
//     }
// }
// oss({name:"alvis"})
/********************************************/
// let arr=["alvis","hello world"];
// let [,a]=arr;
// console.log(a);//hello world
/********************************************/

/********共用一个内存地址***/
// let alvisObj={name:"刘二狗"}
// let copyObj=alvisObj;
// copyObj.name="11";
// console.log(alvisObj,"alvis")//{ name: '11' } alvis

/*****************/


/**内存不公用一个地址*/
// let hd={name:"名字"}
// let cms={
//     name:hd.name
// }
// cms.name="111";
// console.log(hd);
// console.log(cms);


/******************************************深拷贝和浅拷贝-->以下是浅拷贝的方式**************************************/
/**当对象很多的时候可以通过循环遍历来 拷贝*/
// let tempObj={name:"alvis",url:"www.alvis.com"}
// let obj={};
// for (const key in tempObj){
//     obj[key]=tempObj[key];
// }
//  console.log(obj)//{ name: 'alvis', url: 'www.alvis.com' }
// obj.name="111"
// console.log(obj)//{ name: '111', url: 'www.alvis.com' }

// 运用现有的API assigh
// let tempObj={name:"alvis",url:"www.avlis.com"};
// let obj=Object.assign({},tempObj);
// console.log(obj,"alvis");//{ name: 'alvis', url: 'www.avlis.com' } alvis
// obj.name="111";
// console.log(tempObj);//{ name: 'alvis', url: 'www.avlis.com' } alvis
// console.log(obj);//{ name: '111', url: 'www.avlis.com' } alvis

/**解构的方式**/
// let hd={name:"alvis",url:"www.alvis.com"}
// let obj={...hd};
// obj.name="111";
// console.log(hd)
// console.log(obj,"alvis");

// 浅拷贝无法深层次的复制，如果对象中有对象 我们是无法通过浅拷贝来复制的
/******************************************深拷贝和浅拷贝-->以下是深拷贝的方式**************************************/
// 这里就是要 通过无线递归来进行拷贝

/**
 * 举例1:
* **/
// let obj={
//     name:"liu",
//     user:{
//         name:10,
//     }
// }
//
// let hd={
//     name:obj.name,
//     user:obj.user
// }
// hd.name="汉字";
//
// console.log( JSON.stringify(obj,null,2),"obj");
// console.log(JSON.stringify(hd,null,2),"hd");


/**
 * 举例1：输出的结果
 * {
  "name": "liu",
  "user": {
    "name": 10
  }
} obj
 {
  "name": "汉字",
  "user": {
    "name": 10
  }
} hd

 * */
//
// let obj={
//     name:"alvis",
//     user:{
//         name:"liu"
//     }
// }
//
// let hd={
//     name:obj.name,
//     user:obj.user,
// }
// hd.user.name="汉字";
//
// console.log(JSON.stringify(obj,null,0),"obj");//{"name":"alvis","user":{"name":"汉字"}} obj
// console.log(JSON.stringify(hd,null,0),"hd");//{"name":"alvis","user":{"name":"汉字"}} hd

/**以上是无法改动深层次的结构的
 * */

// 浅拷贝的方式func
// let data={
//     name:"alvis",
//     user:{
//         name:"liu"
//     }
// }
// function shadowCopy(object){
//     let res={};
//     for (const key in object) {
//         res[key]=object[key]
//     }
//     return res;
// }
//
// let hd=shadowCopy(data)
// hd.user.name="汉字"
// console.log( JSON.stringify(hd,null,0) ,'hd');
// console.log(JSON.stringify(data,null,0),'data');

//递归操作进行深拷贝
// let data={
//     name:"alvis",
//     user:{
//         name:"liu"
//     },
//     arr:[]
// };
// function deepCopy(obj){
//     let res=obj instanceof Array ? [] : {};
//     for (const [key,v] of Object.entries(obj)) {
//         //这里循环的时候要判断 解构出来的是对象还是数组[key,v]，就是解构循环的内容
//         res[key]= typeof v=="object" ? deepCopy(v) : v;
//     }
//     return res;
// }
//
// let hd=deepCopy(data)
// hd.user.name="汉字"
// hd.arr.push("abc")
// console.log( JSON.stringify(hd,null,0) ,'hd');//{"name":"alvis","user":{"name":"汉字"},"arr":["abc"]} hd
// console.log(JSON.stringify(data,null,0),'data');//{"name":"alvis","user":{"name":"liu"},"arr":[]} data

/**
 * 面向对象
 * exg:
 * */
// let a={
//     name:"liu",
//     show:function(){
//         console.log(this.name)
//     }
// };
// let b={
//     name:'alvis',
//     show:function (){
//         console.log(this.name);
//     }
// }

//如果想让所有的console 左后加上一些数字，你就需要每个都加一遍
//所以才有了 工厂模式

// function factory(mark){
//     return {
//         name:mark,
//         show:function (){
//             console.log(this.name+`.com1111`);
//         }
//     }
// }
// let factory_a=factory("liu");
// factory_a.show()
// let factory_b=factory("alvis");
// factory_b.show()


//构造函数

// function User(name){
//     this.name=name;
//     this.show=function (){
//         console.log(this.name+`.com`)
//     }
// }
// let a=new User('liua');
// console.log(a.name);
// a.show();
// let b =new User("alvis");
// console.log(b.name);
// b.show();

//查看对象的属性
let user={
    name:'liu',
    age:32
}
let single=Object.getOwnPropertyDescriptor(user,'name')
console.log(single,"alvis");
let all=Object.getOwnPropertyDescriptors(user);
console.log(all,"all");











