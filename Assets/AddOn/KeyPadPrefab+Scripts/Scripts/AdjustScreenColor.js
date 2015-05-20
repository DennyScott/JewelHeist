#pragma strict

private var currentColor:Color;
private var oldColor:Color;
private var illuminator:Transform[];

//this simple script adjusts the color of the light effect
//coming from the screen of the keypad

function Start () {
currentColor = transform.GetComponent.<Renderer>().material.color;
oldColor=currentColor;
illuminator = new Transform[3];
illuminator[0]=transform.GetChild(0);
illuminator[1]=transform.GetChild(2);
illuminator[2]=transform.GetChild(3);
}

function Update () {
	//if the current color is not the old color then we adjust
	//the lights to the new color
	currentColor = transform.GetComponent.<Renderer>().material.color;
	if(currentColor!=oldColor){
		oldColor=currentColor;
		for(var i:int=0;i<illuminator.length;i++){
			illuminator[i].GetComponent.<Light>().color=currentColor;
		}
	}

}