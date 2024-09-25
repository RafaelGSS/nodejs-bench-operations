## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|302,073|151037|
|[True conditional] Using constructor name|296,215|148108|
|[True conditional] Check if property is valid then instanceof |298,490|149246|
|[False conditional] Using instanceof only|15,760,887|7880444|
|[False conditional] Using constructor name|15,341,057|7670529|
|[False conditional] Check if property is valid then instanceof |15,918,991|7959496|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:22:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":302073.9329507514,"samples":151037},{"name":"[True conditional] Using constructor name","opsSec":296215.87852670206,"samples":148108},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":298490.07173750806,"samples":149246},{"name":"[False conditional] Using instanceof only","opsSec":15760887.135584904,"samples":7880444},{"name":"[False conditional] Using constructor name","opsSec":15341057.896201504,"samples":7670529},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15918991.575702827,"samples":7959496}]}-->
