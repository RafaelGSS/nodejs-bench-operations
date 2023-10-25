## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,337,840|96|
|Using delete property (proto: null)|14,120,506|95|
|Using delete property (cached proto: null)|2,331,219|96|
|Using undefined assignment|596,346,540|99|
|Using undefined assignment (proto: null)|16,097,251|97|
|Using undefined property (cached proto: null)|593,776,355|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2337840.048281484,"samples":10},{"name":"Using delete property (proto: null)","opsSec":14120506.015389506,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2331219.104710678,"samples":7},{"name":"Using undefined assignment","opsSec":596346540.2550994,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":16097250.940053742,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":593776354.5069432,"samples":9}]}-->
