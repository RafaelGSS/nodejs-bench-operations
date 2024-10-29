## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|84,644,044|42323732|
|using Array.includes (first item)|79,611,434|39805854|
|Using raw comparison|97,323,043|48661532|
|Using raw comparison (first item)|96,904,733|48701261|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:58:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":84644044.04204454,"samples":42323732},{"name":"using Array.includes (first item)","opsSec":79611434.61433354,"samples":39805854},{"name":"Using raw comparison","opsSec":97323043.75680691,"samples":48661532},{"name":"Using raw comparison (first item)","opsSec":96904733.62432097,"samples":48701261}]}-->
