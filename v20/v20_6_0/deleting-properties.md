## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,687,741|98|
|Using delete property (proto: null)|12,403,845|89|
|Using delete property (cached proto: null)|2,724,589|96|
|Using undefined assignment|716,902,936|95|
|Using undefined assignment (proto: null)|13,521,583|99|
|Using undefined property (cached proto: null)|714,048,444|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2687740.6024564286,"samples":4},{"name":"Using delete property (proto: null)","opsSec":12403845.20852419,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":2724589.488338577,"samples":6},{"name":"Using undefined assignment","opsSec":716902935.8002613,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":13521582.785676407,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":714048444.2656342,"samples":6}]}-->
