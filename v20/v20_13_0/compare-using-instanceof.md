## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|326,046|163024|
|[True conditional] Using constructor name|325,184|162593|
|[True conditional] Check if property is valid then instanceof |329,514|164758|
|[False conditional] Using instanceof only|19,872,984|9936493|
|[False conditional] Using constructor name|19,876,673|9938337|
|[False conditional] Check if property is valid then instanceof |19,828,750|9914376|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:47:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":326046.7160280248,"samples":163024},{"name":"[True conditional] Using constructor name","opsSec":325184.88136408606,"samples":162593},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":329514.23314456234,"samples":164758},{"name":"[False conditional] Using instanceof only","opsSec":19872984.9665893,"samples":9936493},{"name":"[False conditional] Using constructor name","opsSec":19876673.64224792,"samples":9938337},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19828750.651676673,"samples":9914376}]}-->
