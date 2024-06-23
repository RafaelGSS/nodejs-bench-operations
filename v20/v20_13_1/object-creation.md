## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|15,742,143|7871072|
|Object.create({})|2,053,503|1026752|
|Cached Empty.prototype|19,496,577|9748289|
|Empty.prototype|1,945,635|972818|
|Empty class|1,248,349|624175|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:57:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":15742143.653649243,"samples":7871072},{"name":"Object.create({})","opsSec":2053503.2155643785,"samples":1026752},{"name":"Cached Empty.prototype","opsSec":19496577.220161933,"samples":9748289},{"name":"Empty.prototype","opsSec":1945635.7665252003,"samples":972818},{"name":"Empty class","opsSec":1248349.8601838602,"samples":624175}]}-->
