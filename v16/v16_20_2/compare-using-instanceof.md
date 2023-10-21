## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|171,972|53|
|[True conditional] Using constructor name|133,493|95|
|[True conditional] Check if property is valid then instanceof |136,027|92|
|[False conditional] Using instanceof only|594,588,611|98|
|[False conditional] Using constructor name|593,934,056|97|
|[False conditional] Check if property is valid then instanceof |594,722,137|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":171972.45633303712,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":133493.46654221704,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":136027.18949308738,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":594588610.5286802,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":593934055.9988905,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":594722137.3280324,"samples":7}]}-->
