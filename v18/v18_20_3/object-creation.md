## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,034,295|6017148|
|Object.create({})|1,277,202|638602|
|Cached Empty.prototype|14,285,453|7142727|
|Empty.prototype|1,298,834|654034|
|Empty class|906,349|453949|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:01:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":12034295.94821991,"samples":6017148},{"name":"Object.create({})","opsSec":1277202.988504626,"samples":638602},{"name":"Cached Empty.prototype","opsSec":14285453.915676929,"samples":7142727},{"name":"Empty.prototype","opsSec":1298834.1707246485,"samples":654034},{"name":"Empty class","opsSec":906349.0168037358,"samples":453949}]}-->
