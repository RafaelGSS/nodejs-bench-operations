## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,528,216|90|
|Using delete property (proto: null)|13,975,388|88|
|Using delete property (cached proto: null)|2,333,957|87|
|Using undefined assignment|669,108,011|87|
|Using undefined assignment (proto: null)|14,075,210|84|
|Using undefined property (cached proto: null)|660,913,130|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759738922119141},"benchmarks":[{"name":"Using delete property","opsSec":2528215.6723251687,"samples":4},{"name":"Using delete property (proto: null)","opsSec":13975387.8341963,"samples":8},{"name":"Using delete property (cached proto: null)","opsSec":2333957.476038135,"samples":4},{"name":"Using undefined assignment","opsSec":669108011.3784556,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":14075210.421404392,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":660913129.5363672,"samples":7}]}-->
