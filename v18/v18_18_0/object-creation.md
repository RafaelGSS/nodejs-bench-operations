## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,148,789|92|
|Object.create({})|810,137|71|
|Cached Empty.prototype|588,082,791|96|
|Empty.prototype|864,617|76|
|Empty class|613,422|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":38148788.54867026,"samples":5},{"name":"Object.create({})","opsSec":810137.2885149219,"samples":4},{"name":"Cached Empty.prototype","opsSec":588082790.6339048,"samples":7},{"name":"Empty.prototype","opsSec":864617.0140534561,"samples":3},{"name":"Empty class","opsSec":613422.0147199002,"samples":3}]}-->
