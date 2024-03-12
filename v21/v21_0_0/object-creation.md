## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|82,764,239|92|
|Object.create({})|2,522,876|83|
|Cached Empty.prototype|821,415,117|98|
|Empty.prototype|2,491,781|84|
|Empty class|1,514,630|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":82764239.07007892,"samples":5},{"name":"Object.create({})","opsSec":2522875.579246617,"samples":3},{"name":"Cached Empty.prototype","opsSec":821415117.373989,"samples":8},{"name":"Empty.prototype","opsSec":2491780.6722673103,"samples":3},{"name":"Empty class","opsSec":1514629.8212119772,"samples":4}]}-->
