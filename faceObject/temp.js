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



