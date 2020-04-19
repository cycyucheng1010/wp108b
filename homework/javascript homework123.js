console.log('第一題(運算出10!)\n')
var factorial=1;
var i;
for ( i=1;i<=10;i++)
{
    factorial = factorial*i;
} 
console.log('factorial(10)=',factorial);
console.log('\n第二題(九九乘法表)\n');
var i,j;
for(i=1;i<=9;i++)
{
console.log('\n',i,'.\n');
for(j=1;j<=9;j++)
{
console.log(i,'*',j,'=',i*j);
}

}
console.log('\n第三題(找範圍內有多少質數)\n');
var n1=3;
var n2=7;
var n1copy=n1;
var i;
var count=0;
for(n1copy;n1copy<=n2;n1copy++){

for(i=2;i<n1copy;i++)
{
    if (n1copy%i==0) {
        break;
    }
    
}
    if(n1copy==i)
    {
        count++;
    }
}
console.log('countprime(',n1,',',n2,')=',count);





