## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,265,911|91|
|Object.create({})|1,231,244|77|
|Cached Empty.prototype|596,346,669|94|
|Empty.prototype|1,114,276|77|
|Empty class|806,915|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":40265911.43722246,"samples":9},{"name":"Object.create({})","opsSec":1231243.9232646395,"samples":3},{"name":"Cached Empty.prototype","opsSec":596346668.5938523,"samples":7},{"name":"Empty.prototype","opsSec":1114276.3306307197,"samples":3},{"name":"Empty class","opsSec":806914.5603174043,"samples":3}]}-->
