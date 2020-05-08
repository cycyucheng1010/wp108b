class vector
{
    constructor(x,y,z)
    {
        this.x =x;  
        this.y =y;  
        this.z =z;  
    }
    add(v2)
    {
        return [this.x+v2.x,this.y+v2.y,this.z+v2.z];//相加
    }
    sub(v2)
    {
        return [this.x-v2.x,this.y-v2.y,this.z-v2.z];//相減
    }
    dot(v2)
    {
        return[this.x*v2.x+this.y*v2.y+this.z*v2.z]//內積公式(x1*x2+y1*y2)
    }
    neg()
    {
        return[0-this.x,0-this.y,0-this.z]  //負向量
    }
}
var v1 = new vector(1,2,3);
var v2 = new vector (4,5,6,);
console.log("\nv1=%s",v1);
console.log("v2=%s",v2);
console.log("\nv1 + v2 = %s",v1.add(v2));//顯示加法結果
console.log("\nv1 - v2 = %s",v1.sub(v2));//顯示減法結果
console.log("\nv1 ‧  v2 = %s",v1.dot(v2));//顯示內積結果
console.log("\nv1' = %s\n",v1.neg());//顯示取負向量結果
module.exports=vector;