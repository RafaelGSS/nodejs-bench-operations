## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|164,268|60|
|[True conditional] Using constructor name|142,168|87|
|[True conditional] Check if property is valid then instanceof |143,255|88|
|[False conditional] Using instanceof only|691,788,164|88|
|[False conditional] Using constructor name|690,955,465|81|
|[False conditional] Check if property is valid then instanceof |691,053,987|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":164268.06455208693,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":142168.06854535182,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":143254.61041909704,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":691788164.3610694,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":690955465.2111573,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":691053986.6554868,"samples":7}]}-->
