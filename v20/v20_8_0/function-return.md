## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,390,070|90|
|Function returning explicitly undefined|1,400,964|96|
|Function returning implicitly undefined|1,432,998|93|
|Function returning string|1,419,871|98|
|Function returning integer|1,425,202|96|
|Function returning float|1,430,391|95|
|Function returning functions|1,398,284|99|
|Function returning arrow functions|1,410,693|98|
|Function returning empty object|1,429,358|98|
|Function returning empty array|1,433,167|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1390069.5818061037,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1400964.3625336224,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1432997.7939310046,"samples":5},{"name":"Function returning string","opsSec":1419871.3534032088,"samples":5},{"name":"Function returning integer","opsSec":1425201.9237857806,"samples":5},{"name":"Function returning float","opsSec":1430390.5634839963,"samples":8},{"name":"Function returning functions","opsSec":1398283.8871244686,"samples":6},{"name":"Function returning arrow functions","opsSec":1410693.2017787446,"samples":6},{"name":"Function returning empty object","opsSec":1429358.0955189492,"samples":7},{"name":"Function returning empty array","opsSec":1433167.4276030457,"samples":5}]}-->
