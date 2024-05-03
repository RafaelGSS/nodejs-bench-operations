## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,899,876|96|
|Function returning explicitly undefined|1,917,897|97|
|Function returning implicitly undefined|1,923,850|94|
|Function returning string|1,901,814|97|
|Function returning integer|1,942,270|96|
|Function returning float|1,928,757|98|
|Function returning functions|1,879,063|97|
|Function returning arrow functions|1,887,952|97|
|Function returning empty object|1,916,131|96|
|Function returning empty array|1,894,386|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:12:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1899876.0825779277,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1917896.5323130286,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1923850.3760874316,"samples":5},{"name":"Function returning string","opsSec":1901813.7471014855,"samples":6},{"name":"Function returning integer","opsSec":1942270.175976308,"samples":5},{"name":"Function returning float","opsSec":1928757.1374368495,"samples":5},{"name":"Function returning functions","opsSec":1879063.3909133656,"samples":7},{"name":"Function returning arrow functions","opsSec":1887951.8001576979,"samples":5},{"name":"Function returning empty object","opsSec":1916130.7662884572,"samples":5},{"name":"Function returning empty array","opsSec":1894386.2355229382,"samples":5}]}-->
