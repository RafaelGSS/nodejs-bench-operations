## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,210,889|1605445|
|Using delete property (proto: null)|7,880,019|3940010|
|Using delete property (cached proto: null)|3,245,808|1622905|
|Using undefined assignment|15,852,639|7926320|
|Using undefined assignment (proto: null)|8,200,137|4100069|
|Using undefined property (cached proto: null)|15,504,516|7752259|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:18:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using delete property","opsSec":3210889.267915478,"samples":1605445},{"name":"Using delete property (proto: null)","opsSec":7880019.605993748,"samples":3940010},{"name":"Using delete property (cached proto: null)","opsSec":3245808.51990504,"samples":1622905},{"name":"Using undefined assignment","opsSec":15852639.017132502,"samples":7926320},{"name":"Using undefined assignment (proto: null)","opsSec":8200137.097968743,"samples":4100069},{"name":"Using undefined property (cached proto: null)","opsSec":15504516.294541946,"samples":7752259}]}-->
