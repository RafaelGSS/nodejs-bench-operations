## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|234,813|57|
|[True conditional] Using constructor name|185,896|100|
|[True conditional] Check if property is valid then instanceof |183,416|92|
|[False conditional] Using instanceof only|854,163,120|98|
|[False conditional] Using constructor name|854,901,278|97|
|[False conditional] Check if property is valid then instanceof |855,250,372|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:44:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":234813.0380819142,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":185896.232778492,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":183416.17352155983,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":854163119.6240895,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":854901278.481056,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":855250372.0257632,"samples":6}]}-->
