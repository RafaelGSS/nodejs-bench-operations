## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,493,554|94|
|Using delete property (proto: null)|11,033,157|95|
|Using delete property (cached proto: null)|2,517,743|95|
|Using undefined assignment|800,597,339|98|
|Using undefined assignment (proto: null)|12,612,484|88|
|Using undefined property (cached proto: null)|779,248,015|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2493554.4995678198,"samples":6},{"name":"Using delete property (proto: null)","opsSec":11033156.59870409,"samples":4},{"name":"Using delete property (cached proto: null)","opsSec":2517742.9235036816,"samples":5},{"name":"Using undefined assignment","opsSec":800597339.0501591,"samples":9},{"name":"Using undefined assignment (proto: null)","opsSec":12612484.47556735,"samples":4},{"name":"Using undefined property (cached proto: null)","opsSec":779248014.9616574,"samples":10}]}-->
