## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,434,108|95|
|Using delete property (proto: null)|22,907,948|98|
|Using delete property (cached proto: null)|4,483,988|96|
|Using undefined assignment|909,598,299|97|
|Using undefined assignment (proto: null)|26,190,449|99|
|Using undefined property (cached proto: null)|908,165,205|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:54:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4434107.95574427,"samples":4},{"name":"Using delete property (proto: null)","opsSec":22907948.113128122,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":4483988.276137414,"samples":4},{"name":"Using undefined assignment","opsSec":909598298.5294715,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":26190448.73689006,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":908165204.8772006,"samples":6}]}-->
