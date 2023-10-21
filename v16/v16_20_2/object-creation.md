## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,991,870|93|
|Object.create({})|1,329,707|81|
|Cached Empty.prototype|711,720,160|97|
|Empty.prototype|1,300,736|72|
|Empty class|882,748|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":40991870.47083139,"samples":7},{"name":"Object.create({})","opsSec":1329706.5317681557,"samples":3},{"name":"Cached Empty.prototype","opsSec":711720160.3306613,"samples":8},{"name":"Empty.prototype","opsSec":1300735.9593071435,"samples":3},{"name":"Empty class","opsSec":882747.9398370023,"samples":3}]}-->
