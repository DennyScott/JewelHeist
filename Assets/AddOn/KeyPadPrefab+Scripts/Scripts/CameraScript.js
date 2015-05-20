#pragma strict

private var unlockScreen:boolean=false;

//this script is responsible for the doom 3 style effect of
//having a mouse cursor when you type

function Start () {
	unlockScreen=false;
	lockCursor();
}

function Update () {
	var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hit : RaycastHit;
	if (Physics.Raycast(ray, hit, 20)) {
	    if(hit.transform.root.name.Contains("KeyPad")){
			if(GetComponent(MouseLook).enabled==true){
				unlockCursor();
			}
			if(GetComponent(MouseLook).enabled==false){
				if(Input.GetMouseButtonDown(0)){
					var ray2 : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
					var hit2 : RaycastHit;
					if(Physics.Raycast(ray2, hit2)){
						//this send what key user clicked on to keypad
						if(hit2.collider.transform.name=="Key1"){
							hit2.transform.root.GetComponent(KeyPadMain).keyEnter(1);
						}
						else if(hit2.collider.transform.name=="Key2"){
							hit2.transform.root.GetComponent(KeyPadMain).keyEnter(2);
						}
						else if(hit2.collider.transform.name=="Key3"){
							hit2.transform.root.GetComponent(KeyPadMain).keyEnter(3);
						}
						else if(hit2.collider.transform.name=="Key4"){
							hit2.transform.root.GetComponent(KeyPadMain).keyEnter(4);
						}
						else if(hit2.collider.transform.name=="Key5"){
							hit2.transform.root.GetComponent(KeyPadMain).keyEnter(5);
						}
						else if(hit2.collider.transform.name=="Key6"){
							hit2.transform.root.GetComponent(KeyPadMain).keyEnter(6);
						}
						else if(hit2.collider.transform.name=="Key7"){
							hit2.transform.root.GetComponent(KeyPadMain).keyEnter(7);
						}
						else if(hit2.collider.transform.name=="Key8"){
							hit2.transform.root.GetComponent(KeyPadMain).keyEnter(8);
						}
						else if(hit2.collider.transform.name=="Key9"){
							hit2.transform.root.GetComponent(KeyPadMain).keyEnter(9);
						}
						else if(hit2.collider.transform.name=="Enter"){
							hit2.transform.root.GetComponent(KeyPadMain).checkCode();
						}
						else if(hit2.collider.transform.name=="Clear"){
							hit2.transform.root.GetComponent(KeyPadMain).Clear();
						}
					}
				}
			}
		}
		else{
			if(GetComponent(MouseLook).enabled==false){
				lockCursor();
			}
		}
	}
	else{
		if(GetComponent(MouseLook).enabled==false){
				lockCursor();
		}
	}

}

function unlockCursor(){
	yield WaitForSeconds(0.2);
	var ray3 : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hit3 : RaycastHit;
	if(Physics.Raycast(ray3, hit3)){
		if(hit3.transform.root.name.Contains("KeyPad")){
			unlockScreen=true;
		}
	}
	if(unlockScreen==true){
		GetComponent(MouseLook).enabled=false;
		Cursor.visible = true;
		transform.root.GetComponent(MouseLook).enabled=false;
		if(GetComponent(MouseLook).enabled==false){
			Screen.lockCursor=false;
		}
	}
}

function lockCursor(){
	unlockScreen=false;
	yield WaitForSeconds(0.1);
	GetComponent(MouseLook).enabled=true;
	Cursor.visible = false;
	transform.root.GetComponent(MouseLook).enabled=true;
	if(GetComponent(MouseLook).enabled==true){
		Screen.lockCursor=true;
	}
}