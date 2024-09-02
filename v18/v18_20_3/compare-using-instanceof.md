## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|250,381|125191|
|[True conditional] Using constructor name|268,724|134363|
|[True conditional] Check if property is valid then instanceof |274,666|137334|
|[False conditional] Using instanceof only|11,155,486|5577744|
|[False conditional] Using constructor name|15,083,875|7541938|
|[False conditional] Check if property is valid then instanceof |15,061,669|7530835|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:42:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":250381.8773087979,"samples":125191},{"name":"[True conditional] Using constructor name","opsSec":268724.87781701254,"samples":134363},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":274666.336080793,"samples":137334},{"name":"[False conditional] Using instanceof only","opsSec":11155486.460993472,"samples":5577744},{"name":"[False conditional] Using constructor name","opsSec":15083875.10043228,"samples":7541938},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15061669.756339254,"samples":7530835}]}-->
