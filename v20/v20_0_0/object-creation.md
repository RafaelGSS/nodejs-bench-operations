## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|95,799,014|93|
|Object.create({})|2,847,500|85|
|Cached Empty.prototype|914,966,858|98|
|Empty.prototype|2,610,985|88|
|Empty class|1,677,854|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:47:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":95799013.97655317,"samples":8},{"name":"Object.create({})","opsSec":2847500.376256694,"samples":3},{"name":"Cached Empty.prototype","opsSec":914966858.4349002,"samples":7},{"name":"Empty.prototype","opsSec":2610984.798725185,"samples":3},{"name":"Empty class","opsSec":1677853.5545746589,"samples":3}]}-->
