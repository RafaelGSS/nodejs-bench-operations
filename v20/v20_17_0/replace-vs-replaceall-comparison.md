## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,341,033|1670895|
|Using replaceAll()|2,848,990|1424886|
|Using replaceAll(//g)|2,879,067|1439534|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:47:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3341033.870578546,"samples":1670895},{"name":"Using replaceAll()","opsSec":2848990.3567037154,"samples":1424886},{"name":"Using replaceAll(//g)","opsSec":2879067.0096009485,"samples":1439534}]}-->
