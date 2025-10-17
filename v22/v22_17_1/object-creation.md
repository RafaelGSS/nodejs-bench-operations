## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|33,328,903|16668278|
|Object.create({})|2,150,646|1083707|
|new Function with empty prototype|72,996,129|36528337|
|Empty class|75,101,141|37552040|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:31:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":16668278,"opsSec":33328903.350501686},{"name":"Object.create({})","samples":1083707,"opsSec":2150646.2755493443},{"name":"new Function with empty prototype","samples":36528337,"opsSec":72996129.25848591},{"name":"Empty class","samples":37552040,"opsSec":75101141.44253764}]}-->
