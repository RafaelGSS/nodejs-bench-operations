## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|83,016,463|93|
|Object.create({})|2,530,944|82|
|Cached Empty.prototype|820,453,313|98|
|Empty.prototype|2,455,823|90|
|Empty class|1,489,720|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":83016463.25479427,"samples":5},{"name":"Object.create({})","opsSec":2530944.474153151,"samples":3},{"name":"Cached Empty.prototype","opsSec":820453313.1448027,"samples":6},{"name":"Empty.prototype","opsSec":2455823.1255187425,"samples":4},{"name":"Empty class","opsSec":1489719.5999415587,"samples":3}]}-->
