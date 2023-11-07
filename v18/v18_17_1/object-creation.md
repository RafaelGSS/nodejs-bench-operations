## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,071,682|96|
|Object.create({})|1,511,002|89|
|Cached Empty.prototype|848,636,358|98|
|Empty.prototype|1,635,393|87|
|Empty class|946,367|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:48:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":77071681.5224479,"samples":5},{"name":"Object.create({})","opsSec":1511002.2184664237,"samples":3},{"name":"Cached Empty.prototype","opsSec":848636357.8210123,"samples":10},{"name":"Empty.prototype","opsSec":1635392.5336648256,"samples":5},{"name":"Empty class","opsSec":946367.2943644682,"samples":3}]}-->
