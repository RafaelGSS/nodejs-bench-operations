## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|17,584,077|8792040|
|Using Object.getOwnPropertyNames()|16,642,868|8321435|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:43:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":17584077.909366183,"samples":8792040},{"name":"Using Object.getOwnPropertyNames()","opsSec":16642868.49178426,"samples":8321435}]}-->
