## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,734,802|1367402|
|Using delete property (proto: null)|7,465,086|3732544|
|Using delete property (cached proto: null)|2,711,183|1355592|
|Using undefined assignment|13,737,192|6868597|
|Using undefined assignment (proto: null)|7,885,619|3942810|
|Using undefined property (cached proto: null)|13,031,192|6515597|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:58:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2734802.457568355,"samples":1367402},{"name":"Using delete property (proto: null)","opsSec":7465086.402483462,"samples":3732544},{"name":"Using delete property (cached proto: null)","opsSec":2711183.468619775,"samples":1355592},{"name":"Using undefined assignment","opsSec":13737192.845988153,"samples":6868597},{"name":"Using undefined assignment (proto: null)","opsSec":7885619.132525202,"samples":3942810},{"name":"Using undefined property (cached proto: null)","opsSec":13031192.38396899,"samples":6515597}]}-->
