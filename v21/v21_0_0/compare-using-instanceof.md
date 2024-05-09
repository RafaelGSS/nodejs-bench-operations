## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|323,301|161651|
|[True conditional] Using constructor name|322,134|161068|
|[True conditional] Check if property is valid then instanceof |329,352|164677|
|[False conditional] Using instanceof only|16,510,791|8255396|
|[False conditional] Using constructor name|16,568,766|8284384|
|[False conditional] Check if property is valid then instanceof |16,523,702|8261852|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:54:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":323301.3421903481,"samples":161651},{"name":"[True conditional] Using constructor name","opsSec":322134.3398304248,"samples":161068},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":329352.18657412607,"samples":164677},{"name":"[False conditional] Using instanceof only","opsSec":16510791.275687791,"samples":8255396},{"name":"[False conditional] Using constructor name","opsSec":16568766.1117558,"samples":8284384},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16523702.936319401,"samples":8261852}]}-->
