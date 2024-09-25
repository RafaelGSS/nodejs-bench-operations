## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|299,276|149639|
|[True conditional] Using constructor name|294,434|147218|
|[True conditional] Check if property is valid then instanceof |299,194|149598|
|[False conditional] Using instanceof only|17,901,891|8950946|
|[False conditional] Using constructor name|17,693,827|8846914|
|[False conditional] Check if property is valid then instanceof |18,126,667|9063334|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:21:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":299276.25521980604,"samples":149639},{"name":"[True conditional] Using constructor name","opsSec":294434.7845733055,"samples":147218},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":299194.48248553806,"samples":149598},{"name":"[False conditional] Using instanceof only","opsSec":17901891.89279363,"samples":8950946},{"name":"[False conditional] Using constructor name","opsSec":17693827.539809447,"samples":8846914},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":18126667.52866863,"samples":9063334}]}-->
