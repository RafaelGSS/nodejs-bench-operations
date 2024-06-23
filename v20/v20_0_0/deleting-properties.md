## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,011,098|1505550|
|Using delete property (proto: null)|8,044,153|4022077|
|Using delete property (cached proto: null)|2,995,570|1497786|
|Using undefined assignment|16,257,183|8128592|
|Using undefined assignment (proto: null)|9,262,193|4631097|
|Using undefined property (cached proto: null)|16,272,222|8136112|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:23:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3011098.987096446,"samples":1505550},{"name":"Using delete property (proto: null)","opsSec":8044153.642878063,"samples":4022077},{"name":"Using delete property (cached proto: null)","opsSec":2995570.227599316,"samples":1497786},{"name":"Using undefined assignment","opsSec":16257183.40778737,"samples":8128592},{"name":"Using undefined assignment (proto: null)","opsSec":9262193.052475827,"samples":4631097},{"name":"Using undefined property (cached proto: null)","opsSec":16272222.178694457,"samples":8136112}]}-->
