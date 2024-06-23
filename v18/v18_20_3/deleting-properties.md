## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,944,868|1472435|
|Using delete property (proto: null)|8,805,726|4402864|
|Using delete property (cached proto: null)|2,958,197|1479099|
|Using undefined assignment|17,212,604|8606303|
|Using undefined assignment (proto: null)|9,138,703|4569352|
|Using undefined property (cached proto: null)|16,970,274|8485138|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:21:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":2944868.990956098,"samples":1472435},{"name":"Using delete property (proto: null)","opsSec":8805726.86519047,"samples":4402864},{"name":"Using delete property (cached proto: null)","opsSec":2958197.2688355134,"samples":1479099},{"name":"Using undefined assignment","opsSec":17212604.808710355,"samples":8606303},{"name":"Using undefined assignment (proto: null)","opsSec":9138703.711108375,"samples":4569352},{"name":"Using undefined property (cached proto: null)","opsSec":16970274.627621815,"samples":8485138}]}-->
