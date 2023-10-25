## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,490,636|87|
|Function returning explicitly undefined|1,507,430|87|
|Function returning implicitly undefined|1,438,159|87|
|Function returning string|1,429,763|83|
|Function returning integer|1,412,107|83|
|Function returning float|1,414,726|84|
|Function returning functions|1,419,582|87|
|Function returning arrow functions|1,459,390|86|
|Function returning empty object|1,446,855|86|
|Function returning empty array|1,509,971|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Function returning null","opsSec":1490635.5996955207,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1507430.3999451601,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1438158.85921622,"samples":7},{"name":"Function returning string","opsSec":1429763.4449937083,"samples":3},{"name":"Function returning integer","opsSec":1412106.841565971,"samples":4},{"name":"Function returning float","opsSec":1414726.4240577295,"samples":6},{"name":"Function returning functions","opsSec":1419581.5376207721,"samples":6},{"name":"Function returning arrow functions","opsSec":1459389.8921130209,"samples":7},{"name":"Function returning empty object","opsSec":1446854.8671796913,"samples":5},{"name":"Function returning empty array","opsSec":1509970.784132009,"samples":6}]}-->
