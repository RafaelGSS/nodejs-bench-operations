## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|334,413|167207|
|[True conditional] Using constructor name|324,701|162351|
|[True conditional] Check if property is valid then instanceof |334,429|167215|
|[False conditional] Using instanceof only|16,151,322|8075662|
|[False conditional] Using constructor name|16,026,072|8013037|
|[False conditional] Check if property is valid then instanceof |16,150,461|8075231|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:14:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":334413.9819416551,"samples":167207},{"name":"[True conditional] Using constructor name","opsSec":324701.3603383026,"samples":162351},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":334429.0803200125,"samples":167215},{"name":"[False conditional] Using instanceof only","opsSec":16151322.22339761,"samples":8075662},{"name":"[False conditional] Using constructor name","opsSec":16026072.205056304,"samples":8013037},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16150461.547758074,"samples":8075231}]}-->
