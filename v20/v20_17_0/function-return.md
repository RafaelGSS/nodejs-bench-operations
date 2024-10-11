## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,818,866|914221|
|Function returning explicitly undefined|1,787,976|893989|
|Function returning implicitly undefined|1,586,654|793328|
|Function returning string|1,534,643|767347|
|Function returning integer|1,609,048|804529|
|Function returning float|1,592,236|796119|
|Function returning functions|1,653,573|826800|
|Function returning arrow functions|1,835,268|917752|
|Function returning empty object|1,890,572|945520|
|Function returning empty array|1,856,696|928356|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:01:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Function returning null","opsSec":1818866.0847651786,"samples":914221},{"name":"Function returning explicitly undefined","opsSec":1787976.2799668184,"samples":893989},{"name":"Function returning implicitly undefined","opsSec":1586654.69576984,"samples":793328},{"name":"Function returning string","opsSec":1534643.4918133975,"samples":767347},{"name":"Function returning integer","opsSec":1609048.8638205512,"samples":804529},{"name":"Function returning float","opsSec":1592236.2867537555,"samples":796119},{"name":"Function returning functions","opsSec":1653573.8603044164,"samples":826800},{"name":"Function returning arrow functions","opsSec":1835268.8433325663,"samples":917752},{"name":"Function returning empty object","opsSec":1890572.38204588,"samples":945520},{"name":"Function returning empty array","opsSec":1856696.3331963404,"samples":928356}]}-->
