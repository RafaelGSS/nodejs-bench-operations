## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,232,984|98|
|Function returning explicitly undefined|1,212,774|91|
|Function returning implicitly undefined|1,258,891|95|
|Function returning string|1,233,040|95|
|Function returning integer|1,239,751|96|
|Function returning float|1,248,944|95|
|Function returning functions|1,206,655|97|
|Function returning arrow functions|1,226,310|97|
|Function returning empty object|1,243,132|92|
|Function returning empty array|1,252,111|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Function returning null","opsSec":1232984.3297352113,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1212774.4520569644,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1258890.6542705284,"samples":7},{"name":"Function returning string","opsSec":1233039.5574362357,"samples":6},{"name":"Function returning integer","opsSec":1239750.7588091714,"samples":7},{"name":"Function returning float","opsSec":1248944.1611441483,"samples":6},{"name":"Function returning functions","opsSec":1206655.2612370967,"samples":7},{"name":"Function returning arrow functions","opsSec":1226310.415166324,"samples":8},{"name":"Function returning empty object","opsSec":1243132.270324563,"samples":6},{"name":"Function returning empty array","opsSec":1252111.4019044172,"samples":6}]}-->
