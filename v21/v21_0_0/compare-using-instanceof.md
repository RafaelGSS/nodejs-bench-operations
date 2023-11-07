## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|236,131|49|
|[True conditional] Using constructor name|185,826|94|
|[True conditional] Check if property is valid then instanceof |192,466|96|
|[False conditional] Using instanceof only|850,975,159|98|
|[False conditional] Using constructor name|849,524,614|97|
|[False conditional] Check if property is valid then instanceof |852,132,903|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:45:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":236130.86732775197,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":185826.02599939532,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":192465.5331739105,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":850975158.5134815,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":849524614.3875488,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":852132903.129695,"samples":9}]}-->
