## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|278,922|139462|
|[True conditional] Using constructor name|288,055|144028|
|[True conditional] Check if property is valid then instanceof |292,332|146167|
|[False conditional] Using instanceof only|19,239,873|9619937|
|[False conditional] Using constructor name|19,588,264|9794133|
|[False conditional] Check if property is valid then instanceof |19,343,301|9671651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":278922.26008303446,"samples":139462},{"name":"[True conditional] Using constructor name","opsSec":288055.8046980763,"samples":144028},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":292332.80494337063,"samples":146167},{"name":"[False conditional] Using instanceof only","opsSec":19239873.96149182,"samples":9619937},{"name":"[False conditional] Using constructor name","opsSec":19588264.74629804,"samples":9794133},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19343301.96139811,"samples":9671651}]}-->
