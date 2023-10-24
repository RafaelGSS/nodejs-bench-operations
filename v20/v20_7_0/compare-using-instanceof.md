## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|166,416|53|
|[True conditional] Using constructor name|129,623|94|
|[True conditional] Check if property is valid then instanceof |126,391|96|
|[False conditional] Using instanceof only|599,355,079|98|
|[False conditional] Using constructor name|598,961,631|97|
|[False conditional] Check if property is valid then instanceof |599,699,343|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":166416.13418465285,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":129623.01715076064,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":126390.72425536482,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":599355078.6844014,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":598961631.2536556,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":599699343.2106645,"samples":6}]}-->
