## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,875,684|1437843|
|Using delete property (proto: null)|8,631,661|4315831|
|Using delete property (cached proto: null)|2,869,649|1434825|
|Using undefined assignment|15,840,448|7920225|
|Using undefined assignment (proto: null)|9,085,714|4542858|
|Using undefined property (cached proto: null)|15,748,995|7874500|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:18:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":2875684.0638189805,"samples":1437843},{"name":"Using delete property (proto: null)","opsSec":8631661.419658538,"samples":4315831},{"name":"Using delete property (cached proto: null)","opsSec":2869649.6565427473,"samples":1434825},{"name":"Using undefined assignment","opsSec":15840448.089011496,"samples":7920225},{"name":"Using undefined assignment (proto: null)","opsSec":9085714.838915072,"samples":4542858},{"name":"Using undefined property (cached proto: null)","opsSec":15748995.141220164,"samples":7874500}]}-->
