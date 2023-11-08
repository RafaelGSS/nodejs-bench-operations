## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|78,124,418|95|
|Object.create({})|2,438,311|82|
|Cached Empty.prototype|850,959,605|100|
|Empty.prototype|2,317,550|79|
|Empty class|1,466,105|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:37:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":78124418.20727356,"samples":5},{"name":"Object.create({})","opsSec":2438310.8228533687,"samples":3},{"name":"Cached Empty.prototype","opsSec":850959604.5600592,"samples":6},{"name":"Empty.prototype","opsSec":2317549.765228703,"samples":3},{"name":"Empty class","opsSec":1466105.491426695,"samples":3}]}-->
