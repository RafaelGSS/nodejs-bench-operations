## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|43,585,879|21797564|
|Object.create({})|1,626,119|817837|
|Cached Empty.prototype|113,211,208|56607782|
|Empty.prototype|1,775,179|894768|
|Empty class|1,115,021|563055|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:17:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":43585879.2507665,"samples":21797564},{"name":"Object.create({})","opsSec":1626119.3907821488,"samples":817837},{"name":"Cached Empty.prototype","opsSec":113211208.99121252,"samples":56607782},{"name":"Empty.prototype","opsSec":1775179.3717446474,"samples":894768},{"name":"Empty class","opsSec":1115021.5985815665,"samples":563055}]}-->
