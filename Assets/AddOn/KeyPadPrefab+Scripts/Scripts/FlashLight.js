#pragma strict

var flashLight:Transform;
//not used but should turn a light on and off if pressing f

function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.F)){
		flashLight.GetComponent.<Light>().enabled=!flashLight.GetComponent.<Light>().enabled;
	}
}