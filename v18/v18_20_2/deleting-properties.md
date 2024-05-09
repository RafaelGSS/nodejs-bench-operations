## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,873,402|1436702|
|Using delete property (proto: null)|8,286,215|4143108|
|Using delete property (cached proto: null)|2,904,058|1452030|
|Using undefined assignment|15,246,729|7623365|
|Using undefined assignment (proto: null)|9,032,064|4516033|
|Using undefined property (cached proto: null)|15,279,532|7639767|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:19:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":2873402.9586895714,"samples":1436702},{"name":"Using delete property (proto: null)","opsSec":8286215.988146473,"samples":4143108},{"name":"Using delete property (cached proto: null)","opsSec":2904058.057177804,"samples":1452030},{"name":"Using undefined assignment","opsSec":15246729.171196401,"samples":7623365},{"name":"Using undefined assignment (proto: null)","opsSec":9032064.729486898,"samples":4516033},{"name":"Using undefined property (cached proto: null)","opsSec":15279532.484543439,"samples":7639767}]}-->
