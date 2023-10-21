## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,566,480|93|
|Using delete property (proto: null)|16,745,189|97|
|Using delete property (cached proto: null)|2,630,015|92|
|Using undefined assignment|594,715,777|95|
|Using undefined assignment (proto: null)|18,754,536|98|
|Using undefined property (cached proto: null)|599,622,786|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2566479.960609113,"samples":4},{"name":"Using delete property (proto: null)","opsSec":16745188.512884397,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2630015.4701580624,"samples":4},{"name":"Using undefined assignment","opsSec":594715776.6832992,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":18754535.570286598,"samples":4},{"name":"Using undefined property (cached proto: null)","opsSec":599622786.1274939,"samples":7}]}-->
