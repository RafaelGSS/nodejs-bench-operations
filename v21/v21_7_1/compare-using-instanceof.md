## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|246,721|52|
|[True conditional] Using constructor name|202,867|95|
|[True conditional] Check if property is valid then instanceof |204,985|98|
|[False conditional] Using instanceof only|824,293,333|98|
|[False conditional] Using constructor name|823,404,041|98|
|[False conditional] Check if property is valid then instanceof |824,803,604|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":246721.46906887201,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":202867.3858783728,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":204985.26491637417,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":824293333.4402988,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":823404040.512674,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":824803604.0712243,"samples":6}]}-->
