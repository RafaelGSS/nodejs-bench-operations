## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|14,475,812|7237907|
|Object.create({})|1,918,409|959205|
|Cached Empty.prototype|19,870,033|9935017|
|Empty.prototype|1,933,981|966991|
|Empty class|1,277,062|643641|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:06:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":14475812.320804464,"samples":7237907},{"name":"Object.create({})","opsSec":1918409.7007268826,"samples":959205},{"name":"Cached Empty.prototype","opsSec":19870033.00649227,"samples":9935017},{"name":"Empty.prototype","opsSec":1933981.6944285936,"samples":966991},{"name":"Empty class","opsSec":1277062.9271320405,"samples":643641}]}-->
