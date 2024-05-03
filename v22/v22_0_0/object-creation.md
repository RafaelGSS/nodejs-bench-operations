## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,074,125|88|
|Object.create({})|2,574,604|89|
|Cached Empty.prototype|148,623,412|86|
|Empty.prototype|2,693,859|90|
|Empty class|1,739,977|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:52:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":57074124.508816876,"samples":5},{"name":"Object.create({})","opsSec":2574604.16084125,"samples":3},{"name":"Cached Empty.prototype","opsSec":148623411.61649272,"samples":5},{"name":"Empty.prototype","opsSec":2693859.1634095856,"samples":3},{"name":"Empty class","opsSec":1739977.4126855498,"samples":3}]}-->
