## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,501,627|750814|
|Function returning explicitly undefined|1,502,969|751485|
|Function returning implicitly undefined|1,519,280|759641|
|Function returning string|1,494,794|747398|
|Function returning integer|1,522,989|761495|
|Function returning float|1,513,205|756604|
|Function returning functions|1,480,656|740329|
|Function returning arrow functions|1,499,559|749780|
|Function returning empty object|1,508,195|754098|
|Function returning empty array|1,489,719|744860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:13:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1501627.57053367,"samples":750814},{"name":"Function returning explicitly undefined","opsSec":1502969.2364929714,"samples":751485},{"name":"Function returning implicitly undefined","opsSec":1519280.6721463194,"samples":759641},{"name":"Function returning string","opsSec":1494794.989516592,"samples":747398},{"name":"Function returning integer","opsSec":1522989.576610993,"samples":761495},{"name":"Function returning float","opsSec":1513205.896645822,"samples":756604},{"name":"Function returning functions","opsSec":1480656.7858653232,"samples":740329},{"name":"Function returning arrow functions","opsSec":1499559.220231211,"samples":749780},{"name":"Function returning empty object","opsSec":1508195.6169139587,"samples":754098},{"name":"Function returning empty array","opsSec":1489719.2968532078,"samples":744860}]}-->
