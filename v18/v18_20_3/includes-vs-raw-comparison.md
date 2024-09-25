## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|12,703,618|6351810|
|using Array.includes (first item)|14,007,451|7003726|
|Using raw comparison|15,112,467|7556234|
|Using raw comparison (first item)|14,501,867|7250934|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:18:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":12703618.865840666,"samples":6351810},{"name":"using Array.includes (first item)","opsSec":14007451.482721588,"samples":7003726},{"name":"Using raw comparison","opsSec":15112467.3854756,"samples":7556234},{"name":"Using raw comparison (first item)","opsSec":14501867.144211123,"samples":7250934}]}-->
