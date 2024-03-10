## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|250,877|50|
|[True conditional] Using constructor name|192,405|94|
|[True conditional] Check if property is valid then instanceof |195,710|92|
|[False conditional] Using instanceof only|819,261,113|99|
|[False conditional] Using constructor name|818,295,597|92|
|[False conditional] Check if property is valid then instanceof |817,903,851|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":250876.67026197742,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":192404.86310178667,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":195709.78927668274,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":819261113.3317771,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":818295597.4619901,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":817903851.4387497,"samples":5}]}-->
