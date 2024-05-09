## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,852,311|7426156|
|using Array.includes (first item)|15,284,973|7642487|
|Using raw comparison|16,243,132|8121567|
|Using raw comparison (first item)|16,173,084|8086543|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:45:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14852311.732657142,"samples":7426156},{"name":"using Array.includes (first item)","opsSec":15284973.602596363,"samples":7642487},{"name":"Using raw comparison","opsSec":16243132.408144474,"samples":8121567},{"name":"Using raw comparison (first item)","opsSec":16173084.091550073,"samples":8086543}]}-->
