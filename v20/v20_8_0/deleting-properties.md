## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,682,852|97|
|Using delete property (proto: null)|12,136,423|88|
|Using delete property (cached proto: null)|2,704,249|93|
|Using undefined assignment|712,737,535|97|
|Using undefined assignment (proto: null)|13,645,843|98|
|Using undefined property (cached proto: null)|711,777,768|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2682851.550170374,"samples":5},{"name":"Using delete property (proto: null)","opsSec":12136422.532199332,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2704248.9026134936,"samples":5},{"name":"Using undefined assignment","opsSec":712737535.3974353,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":13645842.637866884,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":711777768.1076018,"samples":8}]}-->
