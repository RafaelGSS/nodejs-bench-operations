## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,026,422|87|
|Function returning explicitly undefined|1,055,746|85|
|Function returning implicitly undefined|1,080,382|86|
|Function returning string|1,037,549|92|
|Function returning integer|1,098,143|93|
|Function returning float|1,095,720|93|
|Function returning functions|1,107,062|89|
|Function returning arrow functions|1,086,038|92|
|Function returning empty object|1,154,672|89|
|Function returning empty array|1,139,645|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1026421.924455919,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1055746.232711335,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1080382.4819160474,"samples":6},{"name":"Function returning string","opsSec":1037548.7977082198,"samples":10},{"name":"Function returning integer","opsSec":1098142.614135206,"samples":5},{"name":"Function returning float","opsSec":1095720.247443614,"samples":6},{"name":"Function returning functions","opsSec":1107062.4876147455,"samples":7},{"name":"Function returning arrow functions","opsSec":1086037.728502017,"samples":5},{"name":"Function returning empty object","opsSec":1154671.907179576,"samples":8},{"name":"Function returning empty array","opsSec":1139645.4856723065,"samples":7}]}-->
