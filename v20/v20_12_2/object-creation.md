## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|95,092,443|94|
|Object.create({})|2,825,675|87|
|Cached Empty.prototype|938,645,739|99|
|Empty.prototype|2,672,103|87|
|Empty class|1,666,633|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:48:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":95092442.76750131,"samples":5},{"name":"Object.create({})","opsSec":2825675.2117138733,"samples":3},{"name":"Cached Empty.prototype","opsSec":938645739.0664878,"samples":7},{"name":"Empty.prototype","opsSec":2672102.8654191066,"samples":4},{"name":"Empty class","opsSec":1666633.439372164,"samples":3}]}-->
