## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|59,451,321|91|
|Object.create({})|2,051,279|89|
|Cached Empty.prototype|823,754,320|98|
|Empty.prototype|2,105,414|85|
|Empty class|1,336,288|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":59451320.67587182,"samples":6},{"name":"Object.create({})","opsSec":2051279.437518368,"samples":3},{"name":"Cached Empty.prototype","opsSec":823754320.4204489,"samples":9},{"name":"Empty.prototype","opsSec":2105413.97540277,"samples":3},{"name":"Empty class","opsSec":1336287.9817983499,"samples":3}]}-->
