#pragma strict

//this is the main script responsible
//for the framework of the keypad

//currently it only allows for 4 numbers to be entered
//this is easy to change if you want to

var usesKeyPad:boolean=true;
var usesCard:boolean=false;
var usesCardInserter:boolean=false;
var usesCardSlider:boolean=false;
var objectToActivate:Transform;
var passWord:int[]=new int[4];
var neutralMessage:String="Terminal v1.2.0.1";  //start up screen message
var badCodeMessage:String="Access Denied";      //wrong code message
var goodCodeMessage:String="Access Granted";    //correct code message
private var screenMessage:Transform;
private var screenNum1:Transform;
private var screenNum2:Transform;
private var screenNum3:Transform;
private var screenNum4:Transform;
private var screen:Transform;
var neutralMat:Material;
var badMat:Material;
var goodMat:Material;

private var numPressed1:int=0;
private var numPressed2:int=0;
private var numPressed3:int=0;
private var numPressed4:int=0;

function Start () {
	if(usesKeyPad==false && usesCard==false){
		usesKeyPad=true;
		transform.GetChild(0).gameObject.SetActive(true);
		transform.GetChild(1).gameObject.SetActive(false);
	}
	if(usesCard==true){
		if(usesCardSlider==false && usesCardInserter==false){
			usesCardInserter=true;
			transform.GetChild(1).gameObject.SetActive(true);
			transform.GetChild(1).GetChild(0).gameObject.SetActive(true);
			transform.GetChild(1).GetChild(1).gameObject.SetActive(false);
		}
	}
	if(usesCard==false){
		transform.GetChild(1).gameObject.SetActive(false);
		usesCardSlider=false;
		usesCardInserter=false;
	}
	if(usesCardSlider==true && usesCardInserter==true){
		usesCardSlider=false;
		usesCardInserter=true;
		transform.GetChild(1).GetChild(0).gameObject.SetActive(true);
		transform.GetChild(1).GetChild(1).gameObject.SetActive(false);
	}
	if(usesCardInserter==false){
		transform.GetChild(1).GetChild(0).gameObject.SetActive(false);
		transform.GetChild(1).GetChild(1).gameObject.SetActive(true);
	}
	if(usesCardInserter==true){
		transform.GetChild(1).GetChild(0).gameObject.SetActive(true);
		transform.GetChild(1).GetChild(1).gameObject.SetActive(false);
	}
	screen = transform.GetChild(2).GetChild(0);
	screen.GetComponent.<Renderer>().material = neutralMat;
	screenMessage = transform.GetChild(2).GetChild(0).GetChild(4).GetChild(4);
	screenNum1 = transform.GetChild(2).GetChild(0).GetChild(4).GetChild(0);
	screenNum2 = transform.GetChild(2).GetChild(0).GetChild(4).GetChild(1);
	screenNum3 = transform.GetChild(2).GetChild(0).GetChild(4).GetChild(2);
	screenNum4 = transform.GetChild(2).GetChild(0).GetChild(4).GetChild(3);
	screenNum1.GetComponent(TextMesh).text="";
	screenNum2.GetComponent(TextMesh).text="";
	screenNum3.GetComponent(TextMesh).text="";
	screenNum4.GetComponent(TextMesh).text="";
	screenMessage.GetComponent(TextMesh).text=neutralMessage;
	for(var i:int=0;i<passWord.length;i++){
		if(passWord[i]<10&&passWord[i]>0){
			
		}
		else{
			Debug.LogError("Incompatible key code, must be between 1 and 9 (inclusive).", transform);
		}
	}
}

function Update () {
	if(numPressed1!=0){
		screenMessage.GetComponent(TextMesh).text="";
	}
}

function keyEnter(temp:int){
	if(screen.GetComponent.<Renderer>().material.name.Contains("Neutral")){
		if(numPressed1==0){
			numPressed1=temp;
			screenNum1.GetComponent(TextMesh).text=""+temp;
		}
		else if(numPressed2==0){
			numPressed2=temp;
			screenNum2.GetComponent(TextMesh).text=""+temp;
		}
		else if(numPressed3==0){
			numPressed3=temp;
			screenNum3.GetComponent(TextMesh).text=""+temp;
		}
		else if(numPressed4==0){
			numPressed4=temp;
			screenNum4.GetComponent(TextMesh).text=""+temp;
		}
	}
}

function checkCode(){
	var isCorrect:boolean=true;
	if(numPressed1!=passWord[0]){
		isCorrect=false;
	}
	else if(numPressed2!=passWord[1]){
		isCorrect=false;
	}
	else if(numPressed3!=passWord[2]){
		isCorrect=false;
	}
	else if(numPressed4!=passWord[3]){
		isCorrect=false;
	}
	
	if(isCorrect==false){
		activateBad();
	}
	else if(isCorrect==true){
		activateGood();
	}
}

function activateGood(){
	Clear();
	screen.GetComponent.<Renderer>().material = goodMat;
	screenMessage.GetComponent(TextMesh).text=goodCodeMessage;
	yield WaitForSeconds(0.4);
	objectToActivate.gameObject.SendMessage("activate", null);
	yield WaitForSeconds(1.6);
	Clear();
}

function activateBad(){
	Clear();
	screen.GetComponent.<Renderer>().material = badMat;
	screenMessage.GetComponent(TextMesh).text=badCodeMessage;
	yield WaitForSeconds(1.6);
	Clear();
}

function Clear(){
	numPressed1=0;
	numPressed2=0;
	numPressed3=0;
	numPressed4=0;
	screenNum1.GetComponent(TextMesh).text="";
	screenNum2.GetComponent(TextMesh).text="";
	screenNum3.GetComponent(TextMesh).text="";
	screenNum4.GetComponent(TextMesh).text="";
	screenMessage.GetComponent(TextMesh).text=neutralMessage;
	screen.GetComponent.<Renderer>().material = neutralMat;
}