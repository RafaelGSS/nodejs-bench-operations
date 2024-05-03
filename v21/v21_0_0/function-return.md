## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,094,059|96|
|Function returning explicitly undefined|2,053,107|91|
|Function returning implicitly undefined|2,119,596|97|
|Function returning string|2,073,977|95|
|Function returning integer|2,132,187|95|
|Function returning float|2,094,369|97|
|Function returning functions|2,042,948|99|
|Function returning arrow functions|2,075,791|96|
|Function returning empty object|2,092,921|96|
|Function returning empty array|2,104,002|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:13:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":2094059.2848588238,"samples":5},{"name":"Function returning explicitly undefined","opsSec":2053106.5764822697,"samples":6},{"name":"Function returning implicitly undefined","opsSec":2119596.1166640567,"samples":8},{"name":"Function returning string","opsSec":2073977.3940116768,"samples":7},{"name":"Function returning integer","opsSec":2132186.6646607174,"samples":6},{"name":"Function returning float","opsSec":2094369.338517464,"samples":5},{"name":"Function returning functions","opsSec":2042947.9311922146,"samples":5},{"name":"Function returning arrow functions","opsSec":2075790.934412122,"samples":8},{"name":"Function returning empty object","opsSec":2092920.9435658562,"samples":6},{"name":"Function returning empty array","opsSec":2104002.312913328,"samples":5}]}-->
