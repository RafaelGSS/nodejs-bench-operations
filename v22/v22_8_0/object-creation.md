## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,212,114|6106058|
|Object.create({})|1,813,237|906620|
|Cached Empty.prototype|14,046,879|7023440|
|Empty.prototype|2,000,531|1000266|
|Empty class|1,263,236|632922|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:07:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":12212114.534622042,"samples":6106058},{"name":"Object.create({})","opsSec":1813237.4397123342,"samples":906620},{"name":"Cached Empty.prototype","opsSec":14046879.747148873,"samples":7023440},{"name":"Empty.prototype","opsSec":2000531.7599346954,"samples":1000266},{"name":"Empty class","opsSec":1263236.8282420817,"samples":632922}]}-->
