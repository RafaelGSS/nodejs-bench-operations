## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,914,415|1457208|
|Using delete property (proto: null)|8,987,750|4493876|
|Using delete property (cached proto: null)|2,998,456|1499229|
|Using undefined assignment|17,316,277|8658139|
|Using undefined assignment (proto: null)|9,096,756|4548379|
|Using undefined property (cached proto: null)|17,090,493|8545247|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:20:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":2914415.1804615683,"samples":1457208},{"name":"Using delete property (proto: null)","opsSec":8987750.826858351,"samples":4493876},{"name":"Using delete property (cached proto: null)","opsSec":2998456.4020947083,"samples":1499229},{"name":"Using undefined assignment","opsSec":17316277.199034438,"samples":8658139},{"name":"Using undefined assignment (proto: null)","opsSec":9096756.479307255,"samples":4548379},{"name":"Using undefined property (cached proto: null)","opsSec":17090493.222275168,"samples":8545247}]}-->
