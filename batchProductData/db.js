const Mock= require('mockjs');

const Random = Mock.Random;

module.exports = ()=>{
    let data={news:[]}
    for(var i=0;i<20;i++){
        data.news.push({
            id:1,
            content:Random.cparagraph(10)
        })
    }
    return data
}








