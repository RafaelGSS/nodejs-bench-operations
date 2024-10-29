## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|455,614|228102|
|[True conditional] Using constructor name|368,301|184151|
|[True conditional] Check if property is valid then instanceof |367,092|183550|
|[False conditional] Using instanceof only|94,613,392|47306709|
|[False conditional] Using constructor name|94,706,984|47375194|
|[False conditional] Check if property is valid then instanceof |96,160,248|48097177|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:11:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":455614.3075140707,"samples":228102},{"name":"[True conditional] Using constructor name","opsSec":368301.585292415,"samples":184151},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":367092.7440448212,"samples":183550},{"name":"[False conditional] Using instanceof only","opsSec":94613392.2651573,"samples":47306709},{"name":"[False conditional] Using constructor name","opsSec":94706984.35731095,"samples":47375194},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96160248.84454231,"samples":48097177}]}-->
