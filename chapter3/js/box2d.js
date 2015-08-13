var b2Vec2 = Box2D.Common.Math.b2Vec2;
var b2BodyDef = Box2D.Dynamics.b2BodyDef;
var b2Body = Box2D.Dynamics.b2Body;
var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
var b2Fixture = Box2D.Dynamics.b2Fixture;
var b2World = Box2D.Dynamics.b2World;
var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
var b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef;


var world;
var scale = 30; // 设置30个像素为1米

var Box2D = {
	init : function(){
		var gravity = new Box2D.Common.Math.b2Vec2(0,9.8); // 重力加速度9.8 , 方向向下
		var allowSleep = true; // 允许静止的物体进入休眠模式，不参与物理仿真计算
		world = new b2World(gravity,allowSleep);
		
		
		
	},
	
	createFloor : function(){
		
		
	}
	
}


$(document).ready(function(){
});
