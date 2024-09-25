## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|268,377|134189|
|[True conditional] Using constructor name|270,076|135039|
|[True conditional] Check if property is valid then instanceof |278,255|139128|
|[False conditional] Using instanceof only|12,667,207|6333604|
|[False conditional] Using constructor name|17,071,833|8535917|
|[False conditional] Check if property is valid then instanceof |16,711,672|8355837|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:18:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":268377.2372992016,"samples":134189},{"name":"[True conditional] Using constructor name","opsSec":270076.42114524066,"samples":135039},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":278255.33770086657,"samples":139128},{"name":"[False conditional] Using instanceof only","opsSec":12667207.066447748,"samples":6333604},{"name":"[False conditional] Using constructor name","opsSec":17071833.416635707,"samples":8535917},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16711672.971689275,"samples":8355837}]}-->
