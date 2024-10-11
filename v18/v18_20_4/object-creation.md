## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,094,321|20555638|
|Object.create({})|1,267,733|642116|
|Cached Empty.prototype|113,841,209|56920680|
|Empty.prototype|1,462,290|741907|
|Empty class|920,121|465185|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:32:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Object.create(null)","opsSec":41094321.55138026,"samples":20555638},{"name":"Object.create({})","opsSec":1267733.648377861,"samples":642116},{"name":"Cached Empty.prototype","opsSec":113841209.50192104,"samples":56920680},{"name":"Empty.prototype","opsSec":1462290.1996024044,"samples":741907},{"name":"Empty class","opsSec":920121.3097618924,"samples":465185}]}-->
