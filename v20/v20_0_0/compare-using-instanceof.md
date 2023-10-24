## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|153,380|57|
|[True conditional] Using constructor name|119,161|85|
|[True conditional] Check if property is valid then instanceof |122,317|88|
|[False conditional] Using instanceof only|770,373,111|89|
|[False conditional] Using constructor name|760,338,493|87|
|[False conditional] Check if property is valid then instanceof |773,301,557|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":153380.33628971706,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":119161.48142880373,"samples":4},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":122316.98247547568,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":770373111.3333162,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":760338493.3078115,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":773301556.6298565,"samples":6}]}-->
