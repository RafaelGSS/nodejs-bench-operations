## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,499,406|93|
|Function returning explicitly undefined|1,516,802|92|
|Function returning implicitly undefined|1,553,737|95|
|Function returning string|1,517,915|99|
|Function returning integer|1,548,193|98|
|Function returning float|1,547,796|97|
|Function returning functions|1,486,894|97|
|Function returning arrow functions|1,493,749|96|
|Function returning empty object|1,535,297|97|
|Function returning empty array|1,538,977|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:18:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1499405.7957374414,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1516802.1988911377,"samples":4},{"name":"Function returning implicitly undefined","opsSec":1553736.5716802964,"samples":7},{"name":"Function returning string","opsSec":1517914.60419713,"samples":6},{"name":"Function returning integer","opsSec":1548192.9947436722,"samples":7},{"name":"Function returning float","opsSec":1547796.450825901,"samples":5},{"name":"Function returning functions","opsSec":1486893.5220471588,"samples":4},{"name":"Function returning arrow functions","opsSec":1493749.4573884015,"samples":7},{"name":"Function returning empty object","opsSec":1535297.150194072,"samples":6},{"name":"Function returning empty array","opsSec":1538976.5829495436,"samples":8}]}-->
