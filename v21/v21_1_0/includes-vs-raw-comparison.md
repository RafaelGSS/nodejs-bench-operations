## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|911,291,951|96|
|using Array.includes (first item)|912,051,347|99|
|Using raw comparison|913,730,434|99|
|Using raw comparison (first item)|912,336,368|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:42:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":911291950.6373439,"samples":7},{"name":"using Array.includes (first item)","opsSec":912051347.0605773,"samples":8},{"name":"Using raw comparison","opsSec":913730434.118422,"samples":6},{"name":"Using raw comparison (first item)","opsSec":912336367.9874817,"samples":6}]}-->
