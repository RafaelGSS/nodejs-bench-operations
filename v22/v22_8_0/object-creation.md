## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|39,474,943|19737483|
|Object.create({})|2,058,225|1029253|
|Cached Empty.prototype|75,031,866|37518606|
|Empty.prototype|2,521,688|1272027|
|Empty class|1,557,295|778648|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:21:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":39474943.18348283,"samples":19737483},{"name":"Object.create({})","opsSec":2058225.6490843382,"samples":1029253},{"name":"Cached Empty.prototype","opsSec":75031866.57976113,"samples":37518606},{"name":"Empty.prototype","opsSec":2521688.879075833,"samples":1272027},{"name":"Empty class","opsSec":1557295.3147900614,"samples":778648}]}-->
