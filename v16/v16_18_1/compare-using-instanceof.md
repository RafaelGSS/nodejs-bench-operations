## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|193,364|56|
|[True conditional] Using constructor name|151,233|95|
|[True conditional] Check if property is valid then instanceof |153,552|90|
|[False conditional] Using instanceof only|712,514,652|99|
|[False conditional] Using constructor name|713,972,882|96|
|[False conditional] Check if property is valid then instanceof |715,640,739|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":193363.64197083036,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":151233.1752065875,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":153552.27421611777,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":712514652.4562284,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":713972881.6039538,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":715640738.5976033,"samples":6}]}-->
