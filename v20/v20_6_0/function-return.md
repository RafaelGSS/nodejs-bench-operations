## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,385,777|93|
|Function returning explicitly undefined|1,409,278|92|
|Function returning implicitly undefined|1,452,029|83|
|Function returning string|1,438,256|97|
|Function returning integer|1,455,670|96|
|Function returning float|1,449,251|96|
|Function returning functions|1,407,256|96|
|Function returning arrow functions|1,405,492|96|
|Function returning empty object|1,426,469|97|
|Function returning empty array|1,441,265|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1385777.1796427986,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1409278.3343048047,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1452029.3310118348,"samples":5},{"name":"Function returning string","opsSec":1438255.6578008202,"samples":5},{"name":"Function returning integer","opsSec":1455669.5351149363,"samples":6},{"name":"Function returning float","opsSec":1449251.1561969614,"samples":5},{"name":"Function returning functions","opsSec":1407255.5039116272,"samples":5},{"name":"Function returning arrow functions","opsSec":1405492.4810236092,"samples":5},{"name":"Function returning empty object","opsSec":1426469.1695920497,"samples":5},{"name":"Function returning empty array","opsSec":1441265.3876839804,"samples":5}]}-->
