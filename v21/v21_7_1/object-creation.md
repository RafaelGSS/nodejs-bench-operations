## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|80,343,333|91|
|Object.create({})|2,308,038|80|
|Cached Empty.prototype|815,941,273|97|
|Empty.prototype|2,279,667|90|
|Empty class|1,467,433|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":80343333.40698089,"samples":5},{"name":"Object.create({})","opsSec":2308038.401683258,"samples":3},{"name":"Cached Empty.prototype","opsSec":815941273.3065685,"samples":8},{"name":"Empty.prototype","opsSec":2279667.4157694257,"samples":5},{"name":"Empty class","opsSec":1467433.143526245,"samples":3}]}-->
