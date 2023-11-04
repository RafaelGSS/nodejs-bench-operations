## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|251,842|50|
|[True conditional] Using constructor name|207,724|93|
|[True conditional] Check if property is valid then instanceof |209,176|96|
|[False conditional] Using instanceof only|820,585,502|97|
|[False conditional] Using constructor name|820,005,231|94|
|[False conditional] Check if property is valid then instanceof |819,291,663|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:08:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":251841.9691184357,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":207724.00100426315,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":209176.29044882618,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":820585502.1309226,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":820005230.7474855,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":819291662.9645302,"samples":6}]}-->
