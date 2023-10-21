## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|185,382|59|
|[True conditional] Using constructor name|145,575|92|
|[True conditional] Check if property is valid then instanceof |146,983|94|
|[False conditional] Using instanceof only|709,539,866|95|
|[False conditional] Using constructor name|710,139,557|98|
|[False conditional] Check if property is valid then instanceof |711,636,699|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":185381.64255671448,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":145574.51809417238,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":146982.83249044267,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":709539865.5163441,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":710139556.9127923,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":711636698.7732116,"samples":7}]}-->
