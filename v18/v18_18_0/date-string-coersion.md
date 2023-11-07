## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,004,621|98|
|Using brackets {}|1,020,170|98|
|Using '' + |1,013,010|91|
|Using date.toString()|1,102,332|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:26:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1004621.2172862835,"samples":6},{"name":"Using brackets {}","opsSec":1020169.9430967006,"samples":6},{"name":"Using '' + ","opsSec":1013009.9543819001,"samples":6},{"name":"Using date.toString()","opsSec":1102332.4309854454,"samples":7}]}-->
