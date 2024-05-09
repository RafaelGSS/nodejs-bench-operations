## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,194,960|1597481|
|Using delete property (proto: null)|9,695,948|4847975|
|Using delete property (cached proto: null)|3,190,218|1595110|
|Using undefined assignment|21,056,912|10528457|
|Using undefined assignment (proto: null)|10,328,303|5164152|
|Using undefined property (cached proto: null)|20,979,719|10489860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:19:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3194960.6806698083,"samples":1597481},{"name":"Using delete property (proto: null)","opsSec":9695948.317086607,"samples":4847975},{"name":"Using delete property (cached proto: null)","opsSec":3190218.451403435,"samples":1595110},{"name":"Using undefined assignment","opsSec":21056912.564177275,"samples":10528457},{"name":"Using undefined assignment (proto: null)","opsSec":10328303.06426545,"samples":5164152},{"name":"Using undefined property (cached proto: null)","opsSec":20979719.589839697,"samples":10489860}]}-->
