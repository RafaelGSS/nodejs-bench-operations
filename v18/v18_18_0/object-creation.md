## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|75,225,222|91|
|Object.create({})|1,570,222|82|
|Cached Empty.prototype|821,105,742|98|
|Empty.prototype|1,726,210|82|
|Empty class|1,084,910|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":75225221.96192682,"samples":6},{"name":"Object.create({})","opsSec":1570221.997610641,"samples":6},{"name":"Cached Empty.prototype","opsSec":821105742.4846638,"samples":7},{"name":"Empty.prototype","opsSec":1726209.7962584854,"samples":4},{"name":"Empty class","opsSec":1084910.2601909786,"samples":3}]}-->
