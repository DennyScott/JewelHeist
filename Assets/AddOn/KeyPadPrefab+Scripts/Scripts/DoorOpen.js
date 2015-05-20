#pragma strict

private var rise:boolean=false;
var theLight:Transform;
private var called:boolean=false;

//this is just an example script
//basically when the keypad is activated
//and assuming this is the object that it is set to be affected
//the light should turn on and the brick should move vertically

function activate(){
	called=false;
	rise=true;
	theLight.gameObject.SetActive(true);
}

function Update(){
	if(rise!=false){
		if(called==false){
			stop();
		}
		transform.Translate(Vector3.up * Time.deltaTime);
	}
}

function stop(){
	called=true;
	yield WaitForSeconds(9);
	rise=false;
	theLight.gameObject.SetActive(false);
}