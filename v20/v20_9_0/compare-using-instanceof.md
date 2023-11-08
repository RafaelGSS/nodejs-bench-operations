## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|229,336|50|
|[True conditional] Using constructor name|179,654|94|
|[True conditional] Check if property is valid then instanceof |181,405|96|
|[False conditional] Using instanceof only|852,049,857|94|
|[False conditional] Using constructor name|851,488,337|98|
|[False conditional] Check if property is valid then instanceof |852,854,621|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:23:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":229335.88735800973,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":179654.16291245553,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":181404.8251774534,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":852049857.3534822,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":851488337.3415248,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":852854620.5026431,"samples":6}]}-->
