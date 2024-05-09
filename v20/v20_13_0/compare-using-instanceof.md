## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|316,315|158158|
|[True conditional] Using constructor name|321,276|160639|
|[True conditional] Check if property is valid then instanceof |323,701|161851|
|[False conditional] Using instanceof only|19,901,088|9950545|
|[False conditional] Using constructor name|19,977,676|9988839|
|[False conditional] Check if property is valid then instanceof |19,847,148|9923575|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:53:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":316315.98038837593,"samples":158158},{"name":"[True conditional] Using constructor name","opsSec":321276.2901675791,"samples":160639},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":323701.28008834104,"samples":161851},{"name":"[False conditional] Using instanceof only","opsSec":19901088.487519223,"samples":9950545},{"name":"[False conditional] Using constructor name","opsSec":19977676.80146534,"samples":9988839},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19847148.72975223,"samples":9923575}]}-->
