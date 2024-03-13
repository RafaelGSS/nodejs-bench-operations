## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,791,388|93|
|Using delete property (proto: null)|20,678,411|92|
|Using delete property (cached proto: null)|3,881,707|93|
|Using undefined assignment|847,342,789|95|
|Using undefined assignment (proto: null)|22,936,053|97|
|Using undefined property (cached proto: null)|843,332,271|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:51:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3791388.1036514975,"samples":4},{"name":"Using delete property (proto: null)","opsSec":20678410.87383906,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3881706.6801168304,"samples":5},{"name":"Using undefined assignment","opsSec":847342788.5321482,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":22936053.012243874,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":843332271.0752435,"samples":7}]}-->
