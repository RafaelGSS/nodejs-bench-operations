## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|84,842,421|93|
|Object.create({})|2,609,215|80|
|Cached Empty.prototype|845,957,328|99|
|Empty.prototype|2,480,411|87|
|Empty class|1,416,677|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":84842420.54430206,"samples":4},{"name":"Object.create({})","opsSec":2609214.520960955,"samples":4},{"name":"Cached Empty.prototype","opsSec":845957328.1125643,"samples":7},{"name":"Empty.prototype","opsSec":2480410.6186627904,"samples":5},{"name":"Empty class","opsSec":1416677.135528728,"samples":5}]}-->
