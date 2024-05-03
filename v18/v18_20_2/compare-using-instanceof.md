## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|293,548|55|
|[True conditional] Using constructor name|230,278|96|
|[True conditional] Check if property is valid then instanceof |233,946|97|
|[False conditional] Using instanceof only|909,795,879|90|
|[False conditional] Using constructor name|910,225,681|95|
|[False conditional] Check if property is valid then instanceof |910,600,847|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:59:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":293547.999978238,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":230277.53534609708,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":233945.54632482803,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":909795878.6366311,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":910225680.6722298,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":910600846.6672902,"samples":6}]}-->
