## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,114,458|84|
|Object.create({})|814,585|68|
|Cached Empty.prototype|665,399,712|84|
|Empty.prototype|899,354|73|
|Empty class|593,178|71|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":38114458.160805315,"samples":5},{"name":"Object.create({})","opsSec":814585.2893740727,"samples":4},{"name":"Cached Empty.prototype","opsSec":665399711.7645352,"samples":7},{"name":"Empty.prototype","opsSec":899354.1076410958,"samples":3},{"name":"Empty class","opsSec":593177.651611445,"samples":3}]}-->
