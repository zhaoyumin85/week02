import * as module from "./module";
console.log(module);


class Robot{
	constructor(name,serialNum){
		this.name=name;
		this.serialNum=serialNum;
	}
	greeting(){
		console.log("Hello, i am "+this.name);
	}
	static showInfo(){
		console.log("static:: this is a robot class");
	}
}

var robot=new Robot("ALEX","Rob20160206");
robot.greeting();
Robot.showInfo();

class WorkerRobot extends Robot{
	constructor(name,serialNum,role){
		super(name,serialNum);
		this.role=role;
	}
	greeting(){
		console.log("Hello, my name is "+this.name+",i am a "+this.role);
	}
	static showInfo(){
		console.log("static:: this is a worker robot2");
	}
}
var worker=new WorkerRobot("ALEX2","Rob20160206","security");
worker.greeting();
WorkerRobot.showInfo();

var [cat,dog,fox]=["cat","dog","fox"];
console.log(cat);
console.log(dog);
console.log(fox);

var obj={
	a:"1",
	fn4:function(){console.log(this.a);},
	bcc:[1,2,3]
};
var {a,fn4,bcc}=obj;

//传递任意参数
var numPlus2=(...keys)=>{
	var sum=0;
	keys.forEach(function(item){
		sum+=item;
	});
	console.log(sum);
};
numPlus2(2,3,4,5,6,7);
