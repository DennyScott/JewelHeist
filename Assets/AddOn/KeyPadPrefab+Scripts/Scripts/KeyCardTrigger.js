#pragma strict

var keyObject:Transform;

function OnTriggerEnter (other : Collider){
	if(transform.root.GetComponent(KeyPadMain).usesCard==true){
		if(keyObject!=null){
			if(other.transform == keyObject){
				transform.root.GetComponent(KeyPadMain).activateGood();
			}
		}
		else{
			Debug.LogError("No assigned key for key inserter/slider", transform);
		}
	}
}