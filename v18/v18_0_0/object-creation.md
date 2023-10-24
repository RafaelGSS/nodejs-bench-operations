## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,763,864|94|
|Object.create({})|1,234,441|73|
|Cached Empty.prototype|710,589,208|95|
|Empty.prototype|1,274,701|75|
|Empty class|853,073|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":48763864.32991876,"samples":8},{"name":"Object.create({})","opsSec":1234440.714362215,"samples":3},{"name":"Cached Empty.prototype","opsSec":710589207.908823,"samples":9},{"name":"Empty.prototype","opsSec":1274700.6217724495,"samples":3},{"name":"Empty class","opsSec":853072.6806391301,"samples":3}]}-->
