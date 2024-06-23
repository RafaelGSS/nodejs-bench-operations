## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,870,555|7435278|
|using Array.includes (first item)|15,419,409|7709705|
|Using raw comparison|16,256,761|8128381|
|Using raw comparison (first item)|16,125,230|8062616|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:40:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14870555.048295353,"samples":7435278},{"name":"using Array.includes (first item)","opsSec":15419409.907481967,"samples":7709705},{"name":"Using raw comparison","opsSec":16256761.60984504,"samples":8128381},{"name":"Using raw comparison (first item)","opsSec":16125230.806764489,"samples":8062616}]}-->
