## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|246,786|50|
|[True conditional] Using constructor name|200,939|95|
|[True conditional] Check if property is valid then instanceof |202,228|94|
|[False conditional] Using instanceof only|818,393,053|97|
|[False conditional] Using constructor name|821,817,717|93|
|[False conditional] Check if property is valid then instanceof |818,952,933|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:33:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":246786.42799221072,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":200939.00628326967,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":202228.06938940173,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":818393052.5169063,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":821817717.3629736,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":818952933.4210017,"samples":7}]}-->
