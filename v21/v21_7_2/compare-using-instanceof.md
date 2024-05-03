## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|274,679|54|
|[True conditional] Using constructor name|228,154|96|
|[True conditional] Check if property is valid then instanceof |228,435|90|
|[False conditional] Using instanceof only|912,130,345|100|
|[False conditional] Using constructor name|913,253,201|94|
|[False conditional] Check if property is valid then instanceof |913,454,371|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:03:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":274678.7330308187,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":228154.00239916894,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":228435.25427802932,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":912130344.6276729,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":913253200.6691492,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":913454370.8391877,"samples":8}]}-->
