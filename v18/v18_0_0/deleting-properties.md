## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,644,551|1322276|
|Using delete property (proto: null)|8,309,381|4154691|
|Using delete property (cached proto: null)|2,674,042|1337023|
|Using undefined assignment|14,724,732|7362367|
|Using undefined assignment (proto: null)|8,885,348|4442675|
|Using undefined property (cached proto: null)|13,185,700|6592851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:52:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2644551.3824694604,"samples":1322276},{"name":"Using delete property (proto: null)","opsSec":8309381.532442341,"samples":4154691},{"name":"Using delete property (cached proto: null)","opsSec":2674042.4019953194,"samples":1337023},{"name":"Using undefined assignment","opsSec":14724732.908187881,"samples":7362367},{"name":"Using undefined assignment (proto: null)","opsSec":8885348.967959376,"samples":4442675},{"name":"Using undefined property (cached proto: null)","opsSec":13185700.75430252,"samples":6592851}]}-->
