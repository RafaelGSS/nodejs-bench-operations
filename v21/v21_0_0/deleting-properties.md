## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,283,967|1641984|
|Using delete property (proto: null)|9,050,929|4525465|
|Using delete property (cached proto: null)|3,269,238|1634620|
|Using undefined assignment|16,554,281|8277141|
|Using undefined assignment (proto: null)|9,450,096|4725049|
|Using undefined property (cached proto: null)|16,548,120|8274061|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:22:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3283967.6382729886,"samples":1641984},{"name":"Using delete property (proto: null)","opsSec":9050929.555470588,"samples":4525465},{"name":"Using delete property (cached proto: null)","opsSec":3269238.812122357,"samples":1634620},{"name":"Using undefined assignment","opsSec":16554281.660571044,"samples":8277141},{"name":"Using undefined assignment (proto: null)","opsSec":9450096.562535856,"samples":4725049},{"name":"Using undefined property (cached proto: null)","opsSec":16548120.918966023,"samples":8274061}]}-->
