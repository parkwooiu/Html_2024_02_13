// 콜백함수

let f = function(){
    console.log("1번")
};


setTimeout(
    f,3000
);
console.log("------------------")


function double(num){
    setTimeout(
        function(){
            const doublenum = num*2;
            console.log(doublenum);
        },1000
    );
};

double(10);