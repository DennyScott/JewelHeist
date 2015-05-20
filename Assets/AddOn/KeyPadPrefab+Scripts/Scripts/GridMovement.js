#pragma strict

private var startPos:Vector3;
private var endPos:Vector3;

//this script is responsible for the moving grid effect on the screen of the 
//keypad/terminal

function Start () {
transform.localPosition.x=-0.08436945;
transform.localPosition.y=0.9710295;
transform.localPosition.z=0.3273592;
startPos=transform.position;
transform.localPosition.x=0.06787375;
transform.localPosition.y=0.8189795;
transform.localPosition.z=0.3273592;
endPos=transform.position;

transform.position=startPos;
}

function Update () {
	var step = 0.1 * Time.deltaTime;
	if(transform.position!=endPos){
		transform.position = Vector3.MoveTowards(transform.position, endPos, step);
	}
	else if(transform.position==endPos){
		transform.position=startPos;
	}
}