## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|254,550|85|
|[True conditional] Using constructor name|254,579|84|
|[True conditional] Check if property is valid then instanceof |255,270|84|
|[False conditional] Using instanceof only|590,636,256|96|
|[False conditional] Using constructor name|589,147,870|93|
|[False conditional] Check if property is valid then instanceof |587,849,055|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":254549.5448576256,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":254579.28932162066,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":255269.77407926583,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":590636256.3784001,"samples":9},{"name":"[False conditional] Using constructor name","opsSec":589147869.9516019,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":587849054.9755732,"samples":7}]}-->
