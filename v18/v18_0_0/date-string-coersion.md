## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|690,801|98|
|Using brackets {}|699,349|97|
|Using '' + |695,276|98|
|Using date.toString()|755,804|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":690800.9003201475,"samples":6},{"name":"Using brackets {}","opsSec":699349.127974865,"samples":4},{"name":"Using '' + ","opsSec":695275.5550734929,"samples":8},{"name":"Using date.toString()","opsSec":755804.4656043036,"samples":4}]}-->
