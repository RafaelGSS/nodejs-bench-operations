## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,384,837|1692419|
|Using delete property (proto: null)|9,082,113|4541057|
|Using delete property (cached proto: null)|3,308,712|1654357|
|Using undefined assignment|16,117,812|8058907|
|Using undefined assignment (proto: null)|8,615,860|4307931|
|Using undefined property (cached proto: null)|16,149,575|8074788|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:25:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3384837.6141289324,"samples":1692419},{"name":"Using delete property (proto: null)","opsSec":9082113.945510445,"samples":4541057},{"name":"Using delete property (cached proto: null)","opsSec":3308712.2000602908,"samples":1654357},{"name":"Using undefined assignment","opsSec":16117812.581603399,"samples":8058907},{"name":"Using undefined assignment (proto: null)","opsSec":8615860.173427623,"samples":4307931},{"name":"Using undefined property (cached proto: null)","opsSec":16149575.806213072,"samples":8074788}]}-->
