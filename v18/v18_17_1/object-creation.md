## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,794,918|94|
|Object.create({})|956,321|74|
|Cached Empty.prototype|712,923,743|99|
|Empty.prototype|1,058,913|80|
|Empty class|729,587|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":48794917.64190368,"samples":7},{"name":"Object.create({})","opsSec":956320.7607725401,"samples":3},{"name":"Cached Empty.prototype","opsSec":712923743.4280591,"samples":9},{"name":"Empty.prototype","opsSec":1058913.0947199478,"samples":3},{"name":"Empty class","opsSec":729586.7794075147,"samples":3}]}-->
