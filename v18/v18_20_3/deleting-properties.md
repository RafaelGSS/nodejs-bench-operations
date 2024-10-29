## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,194,928|1597466|
|Using delete property (proto: null)|16,378,416|8189918|
|Using delete property (cached proto: null)|3,144,022|1572366|
|Using undefined assignment|75,813,771|37912086|
|Using undefined assignment (proto: null)|18,596,414|9300171|
|Using undefined property (cached proto: null)|75,405,328|37702677|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:37:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3194928.338612124,"samples":1597466},{"name":"Using delete property (proto: null)","opsSec":16378416.810183397,"samples":8189918},{"name":"Using delete property (cached proto: null)","opsSec":3144022.6141775628,"samples":1572366},{"name":"Using undefined assignment","opsSec":75813771.8667753,"samples":37912086},{"name":"Using undefined assignment (proto: null)","opsSec":18596414.102606077,"samples":9300171},{"name":"Using undefined property (cached proto: null)","opsSec":75405328.06056714,"samples":37702677}]}-->
