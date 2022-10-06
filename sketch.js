
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball;
var world,engine;
var canasta1,canasta2
function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);
var ball_options={
	//Recuerda que al final de cada línea colocamos una "," y usamos ":" en lugar de "="
	isStatic :false,
	restitution:0.3,
	friction:0,
	density:1.2,
	
}
    
	engine = Engine.create();
	world = engine.world;

	//4. creamos el objeto ball (tal como lo hiciste para los primeros objetos de Matter)  y lo agregamos al mundo
	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
	//5. Creamos la clase "ground" (puedes usar la clase que hicimos para el juego de los piratas)
	ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
	World.add(world, ground);
	Engine.run(engine);
	ground = new Ground (400,695,1000,10);
	canasta1 = new Ground (750,664,10,50);
	canasta2 = new Ground (600,664,10,50);

}


function draw() {
  rectMode(CENTER);
  background(0);
 Engine.update(engine);
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20);

  drawSprites();
 ground.show();
 canasta1.show();
 canasta2.show();
}
 function keyPressed (){
if (keyCode==32){
Matter.Body.applyForce(ball,{
	x:0,y:0
},{
	x:10,y:-20
})

}
 }



