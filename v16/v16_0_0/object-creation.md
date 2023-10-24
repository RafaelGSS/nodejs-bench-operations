## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|34,906,549|94|
|Object.create({})|1,000,903|77|
|Cached Empty.prototype|587,014,621|94|
|Empty.prototype|1,061,617|74|
|Empty class|712,749|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":34906549.40645038,"samples":6},{"name":"Object.create({})","opsSec":1000902.6725223667,"samples":3},{"name":"Cached Empty.prototype","opsSec":587014620.6880277,"samples":6},{"name":"Empty.prototype","opsSec":1061617.0809504641,"samples":3},{"name":"Empty class","opsSec":712749.2102381273,"samples":3}]}-->
