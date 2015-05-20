If you get errors:
IMPORTANT, MAKE A "Plugins" folder under "Assets" then place MouseLook.cs into "Plugins"


Instructions:

	Step 1) Spawn Camera and attach CameraScript to it
	Step 2) Spawn KeyPad Prefab
	Step 3) Set your 4 number pass code in the KeyPadMain script attached to the keypad (Pass Word)
		- You may have less then 4 numbers
			if you want the pass code to be 69 set the array Pass Word to 6 9 0 0
			0 0 0 0 = unlock if hit enter no passcode entered
			1 2 4 4 = unlock if 1 2 4 4 is entered

	              ~~! 0's before any number will result in an impossible keypad !~~

	Step 4) You may have both a keypad and a keycard inserter or slider (you may not have both an inserter and slider)
	Step 5) Adjust anything else you want
	Step 6) Any object that you want the keypad to activate must contain a activate() method or function
	Step 7) Enjoy!