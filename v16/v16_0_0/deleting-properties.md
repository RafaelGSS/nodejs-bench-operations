## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,219,112|92|
|Using delete property (proto: null)|12,138,804|92|
|Using delete property (cached proto: null)|2,228,439|95|
|Using undefined assignment|704,707,617|97|
|Using undefined assignment (proto: null)|13,720,652|98|
|Using undefined property (cached proto: null)|706,255,321|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2219111.7071548626,"samples":7},{"name":"Using delete property (proto: null)","opsSec":12138803.880772436,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2228439.0776670505,"samples":7},{"name":"Using undefined assignment","opsSec":704707617.3683493,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":13720652.328208636,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":706255321.154418,"samples":7}]}-->
