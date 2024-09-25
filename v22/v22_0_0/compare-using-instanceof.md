## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|328,192|164097|
|[True conditional] Using constructor name|316,427|158214|
|[True conditional] Check if property is valid then instanceof |318,265|159133|
|[False conditional] Using instanceof only|14,151,869|7075935|
|[False conditional] Using constructor name|14,209,951|7104976|
|[False conditional] Check if property is valid then instanceof |14,421,532|7210767|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:24:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":328192.5789262169,"samples":164097},{"name":"[True conditional] Using constructor name","opsSec":316427.36714581354,"samples":158214},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":318265.2253424097,"samples":159133},{"name":"[False conditional] Using instanceof only","opsSec":14151869.858499067,"samples":7075935},{"name":"[False conditional] Using constructor name","opsSec":14209951.573709993,"samples":7104976},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14421532.846151695,"samples":7210767}]}-->
