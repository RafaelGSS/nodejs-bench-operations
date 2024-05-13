## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,381,200|1690601|
|Using delete property (proto: null)|9,243,254|4621628|
|Using delete property (cached proto: null)|3,348,564|1674283|
|Using undefined assignment|16,122,285|8061143|
|Using undefined assignment (proto: null)|9,015,830|4507916|
|Using undefined property (cached proto: null)|16,129,002|8064502|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:52:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3381200.816579621,"samples":1690601},{"name":"Using delete property (proto: null)","opsSec":9243254.70595051,"samples":4621628},{"name":"Using delete property (cached proto: null)","opsSec":3348564.4998463425,"samples":1674283},{"name":"Using undefined assignment","opsSec":16122285.322874255,"samples":8061143},{"name":"Using undefined assignment (proto: null)","opsSec":9015830.629597118,"samples":4507916},{"name":"Using undefined property (cached proto: null)","opsSec":16129002.32263459,"samples":8064502}]}-->
