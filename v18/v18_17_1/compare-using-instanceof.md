## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|241,386|53|
|[True conditional] Using constructor name|180,413|95|
|[True conditional] Check if property is valid then instanceof |184,270|96|
|[False conditional] Using instanceof only|847,857,251|98|
|[False conditional] Using constructor name|848,004,989|98|
|[False conditional] Check if property is valid then instanceof |845,864,780|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:39:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":241386.07504362086,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":180412.98930188353,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":184270.42837647116,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":847857250.506875,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":848004988.5038116,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":845864779.8353766,"samples":7}]}-->
