## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|237,832|53|
|[True conditional] Using constructor name|192,759|92|
|[True conditional] Check if property is valid then instanceof |194,860|93|
|[False conditional] Using instanceof only|825,796,207|98|
|[False conditional] Using constructor name|824,147,695|96|
|[False conditional] Check if property is valid then instanceof |826,812,673|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":237831.71331725176,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":192758.64795988708,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":194859.85955512314,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":825796206.5021873,"samples":5},{"name":"[False conditional] Using constructor name","opsSec":824147694.9729468,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":826812672.7685115,"samples":9}]}-->
