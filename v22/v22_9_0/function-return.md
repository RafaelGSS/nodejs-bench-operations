## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,516,901|758451|
|Function returning explicitly undefined|1,489,833|744917|
|Function returning implicitly undefined|1,526,960|763481|
|Function returning string|1,513,134|756568|
|Function returning integer|1,519,698|759850|
|Function returning float|1,507,613|753808|
|Function returning functions|1,454,299|727150|
|Function returning arrow functions|1,500,007|750004|
|Function returning empty object|1,527,628|763815|
|Function returning empty array|1,512,435|756218|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:16:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1516901.7117884778,"samples":758451},{"name":"Function returning explicitly undefined","opsSec":1489833.058424061,"samples":744917},{"name":"Function returning implicitly undefined","opsSec":1526960.1340540512,"samples":763481},{"name":"Function returning string","opsSec":1513134.3900241668,"samples":756568},{"name":"Function returning integer","opsSec":1519698.4590260922,"samples":759850},{"name":"Function returning float","opsSec":1507613.7204818092,"samples":753808},{"name":"Function returning functions","opsSec":1454299.4706270574,"samples":727150},{"name":"Function returning arrow functions","opsSec":1500007.6699970877,"samples":750004},{"name":"Function returning empty object","opsSec":1527628.6893002095,"samples":763815},{"name":"Function returning empty array","opsSec":1512435.718686784,"samples":756218}]}-->
