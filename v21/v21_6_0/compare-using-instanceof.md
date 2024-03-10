## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|246,709|54|
|[True conditional] Using constructor name|202,842|93|
|[True conditional] Check if property is valid then instanceof |205,905|96|
|[False conditional] Using instanceof only|823,419,857|97|
|[False conditional] Using constructor name|822,744,771|97|
|[False conditional] Check if property is valid then instanceof |824,372,608|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":246708.61456165017,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":202842.47968187582,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":205904.6384825214,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":823419856.7551914,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":822744770.7873706,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":824372608.2806928,"samples":7}]}-->
