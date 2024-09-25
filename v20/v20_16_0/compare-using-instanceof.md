## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|296,689|148345|
|[True conditional] Using constructor name|295,579|147790|
|[True conditional] Check if property is valid then instanceof |299,578|149790|
|[False conditional] Using instanceof only|17,647,723|8823862|
|[False conditional] Using constructor name|18,177,891|9088946|
|[False conditional] Check if property is valid then instanceof |17,916,510|8958256|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:20:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":296689.605996439,"samples":148345},{"name":"[True conditional] Using constructor name","opsSec":295579.8090555475,"samples":147790},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":299578.58778680675,"samples":149790},{"name":"[False conditional] Using instanceof only","opsSec":17647723.57650829,"samples":8823862},{"name":"[False conditional] Using constructor name","opsSec":18177891.52739397,"samples":9088946},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":17916510.24437903,"samples":8958256}]}-->
