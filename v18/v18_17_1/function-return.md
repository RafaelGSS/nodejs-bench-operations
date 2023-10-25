## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,280,270|96|
|Function returning explicitly undefined|1,280,486|89|
|Function returning implicitly undefined|1,299,646|90|
|Function returning string|1,304,741|97|
|Function returning integer|1,251,121|96|
|Function returning float|1,325,621|95|
|Function returning functions|1,270,105|98|
|Function returning arrow functions|1,291,856|92|
|Function returning empty object|1,322,990|96|
|Function returning empty array|1,317,503|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1280270.2100520146,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1280485.6196354083,"samples":8},{"name":"Function returning implicitly undefined","opsSec":1299646.3232016505,"samples":6},{"name":"Function returning string","opsSec":1304740.5301916893,"samples":5},{"name":"Function returning integer","opsSec":1251121.205070396,"samples":6},{"name":"Function returning float","opsSec":1325620.811342723,"samples":6},{"name":"Function returning functions","opsSec":1270105.491866154,"samples":6},{"name":"Function returning arrow functions","opsSec":1291856.2869752701,"samples":6},{"name":"Function returning empty object","opsSec":1322989.6766935007,"samples":5},{"name":"Function returning empty array","opsSec":1317502.9439866133,"samples":7}]}-->
