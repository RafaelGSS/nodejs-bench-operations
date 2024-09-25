## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|307,132|153567|
|[True conditional] Using constructor name|300,245|150123|
|[True conditional] Check if property is valid then instanceof |305,370|152686|
|[False conditional] Using instanceof only|14,433,872|7216937|
|[False conditional] Using constructor name|13,674,713|6837357|
|[False conditional] Check if property is valid then instanceof |13,988,531|6994266|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:24:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":307132.1965193628,"samples":153567},{"name":"[True conditional] Using constructor name","opsSec":300245.61628616694,"samples":150123},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":305370.6844628426,"samples":152686},{"name":"[False conditional] Using instanceof only","opsSec":14433872.239092406,"samples":7216937},{"name":"[False conditional] Using constructor name","opsSec":13674713.781274153,"samples":6837357},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":13988531.943981733,"samples":6994266}]}-->
