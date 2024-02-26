//콜백함수

function fetchDate(callback){
    setTimeout(function(){
       const data = "여기 데이타";
       callback(data);
    },1000) ;
}

let f = functopn(data){
    console.log("데이타 도착 >> " + data);
}
fetchDate(f);


fetchDate(function(data){
    console.log("새로운 데이타 >> " + data);
});