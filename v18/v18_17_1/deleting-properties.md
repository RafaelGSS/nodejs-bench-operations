## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,357,652|93|
|Using delete property (proto: null)|15,623,236|94|
|Using delete property (cached proto: null)|2,342,636|97|
|Using undefined assignment|591,401,134|95|
|Using undefined assignment (proto: null)|18,389,836|95|
|Using undefined property (cached proto: null)|596,774,611|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2357652.029733667,"samples":6},{"name":"Using delete property (proto: null)","opsSec":15623235.951504914,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2342636.438515452,"samples":8},{"name":"Using undefined assignment","opsSec":591401133.7591665,"samples":9},{"name":"Using undefined assignment (proto: null)","opsSec":18389836.432212405,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":596774611.3276551,"samples":8}]}-->
