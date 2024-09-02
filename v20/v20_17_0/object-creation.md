## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|14,606,320|7303787|
|Object.create({})|1,802,328|903585|
|Cached Empty.prototype|17,024,053|8512027|
|Empty.prototype|1,814,769|907385|
|Empty class|1,269,649|634825|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:23:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":14606320.164301274,"samples":7303787},{"name":"Object.create({})","opsSec":1802328.9911947811,"samples":903585},{"name":"Cached Empty.prototype","opsSec":17024053.863927796,"samples":8512027},{"name":"Empty.prototype","opsSec":1814769.0163927872,"samples":907385},{"name":"Empty class","opsSec":1269649.4337374356,"samples":634825}]}-->
