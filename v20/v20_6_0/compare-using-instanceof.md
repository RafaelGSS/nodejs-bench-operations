## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|180,317|55|
|[True conditional] Using constructor name|143,296|92|
|[True conditional] Check if property is valid then instanceof |146,546|97|
|[False conditional] Using instanceof only|719,353,900|97|
|[False conditional] Using constructor name|719,050,466|98|
|[False conditional] Check if property is valid then instanceof |720,660,211|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":180316.52456796018,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":143295.88364721253,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":146545.87697056407,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":719353899.6824243,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":719050465.7015859,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":720660210.9817837,"samples":6}]}-->
