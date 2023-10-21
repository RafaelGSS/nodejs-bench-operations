## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,169,279|95|
|Function returning explicitly undefined|1,155,889|95|
|Function returning implicitly undefined|1,175,871|94|
|Function returning string|1,164,542|94|
|Function returning integer|1,186,502|94|
|Function returning float|1,173,853|93|
|Function returning functions|1,153,259|97|
|Function returning arrow functions|1,158,654|95|
|Function returning empty object|1,119,176|99|
|Function returning empty array|1,142,587|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1169278.5168891784,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1155889.3298547731,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1175870.6054133289,"samples":5},{"name":"Function returning string","opsSec":1164541.6430596157,"samples":5},{"name":"Function returning integer","opsSec":1186501.6731318068,"samples":5},{"name":"Function returning float","opsSec":1173852.7365177416,"samples":5},{"name":"Function returning functions","opsSec":1153259.4257190733,"samples":8},{"name":"Function returning arrow functions","opsSec":1158653.9715933606,"samples":5},{"name":"Function returning empty object","opsSec":1119176.1153974072,"samples":8},{"name":"Function returning empty array","opsSec":1142587.203505465,"samples":5}]}-->
