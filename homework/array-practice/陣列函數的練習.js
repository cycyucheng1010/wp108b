//一維矩陣
console.log("一維矩陣\n");
var a = [1,2,3,4,5,6,7];//第一題第二題的矩陣



//1.求平均值
console.log("1.求平均值\n")
var avg = 0, i = 0 , sum = 0 ;
for( i ; i<a.length ; i++)

{
    sum =sum+a[i];  //求總和
}

avg = sum / a.length; //求平均

console.log("%s average = %f\n",a,avg);

//2.求標準差
console.log("2.求標準差\n");
var total = 0 ,sd = 0 , j=0;
for( j ; j<a.length ; j++ )

{
    total = total + (a[j]-avg)*(a[j]-avg); //吸個麻
    
}
sd =Math.sqrt(total / a.length); //標準差
console.log("%s Standard Deviation=%f\n",a,sd);

//3.因數分解
console.log("3.因數分解(45)\n")
function factor(a)
{
    var b = [];
    var i =2;
        while(a>1)//為1時停止
    {
        if (a%i==0)//整除的話儲存並繼續
        {
            b.push(i);
            a=a/i;
            continue;
            
        }
        
            i++;//無法整除時換下一個數嘗試
        
    }
    return b;
}
console.log(factor(45));
console.log("\n");

//二維矩陣

console.log("二維矩陣\n");

//1.請寫一個函數計算兩矩陣相加 add([[1,2],[3,4]], [[1,1],[1,1]]) => [[2,3], [4,5]]
console.log("1.請寫出一個函數計算兩矩陣相加 \n");

function add( a , b )
{
    var m , n ;
    var d = [];
    for(m=0 ; m<a.length ; m++)
    {
        d[m]=[];
        for(n=0 ; n<a[m].length ; n++)
        {
            d[m][n] =a[m][n] + b[m][n] 


        }
    }
    return d;
}
console.log(add([[1,2],[3,4]],[[1,1],[1,1]]));

//2.請寫一個函數 neg(A) 傳回某矩陣 A 的負矩陣 -A

console.log("\n2.請寫一個函數 neg(A) 傳回負矩陣 -A \n");

function neg(a) {
    var p, q;
    var x = []; 
    for (p=0; p<a.length; p++) {
        x[p] = []; 
        for (q=0; q<a[p].length; q++) {
            x[p][q] = 0 - a[p][q];
        }
    }
    return x;
}

console.log(neg([[1,2],[3,4]]));

//3.寫一個程式把矩陣轉置。

console.log("\n3.寫一個程式把矩陣轉置。\n");

function transpose(a){
    var f = [];
    for(var r = 0; r < a[0].length; r++) {
       f[r] = [];
       for(var s = 0; s < a.length; s++){
           f[r][s] = a[s][r];
       }
   }
   return f;
}

console.log(transpose([[1,2,3],[3,2,1]]));