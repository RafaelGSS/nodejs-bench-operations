## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|81,490,368|40748764|
|Using dot notation|78,859,730|39526976|
|Using define property (writable)|4,436,350|2218179|
|Using define property initialized (writable)|5,977,831|2989147|
|Using define property (getter)|2,181,712|1099830|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:41:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":40748764,"opsSec":81490368.256245},{"name":"Using dot notation","samples":39526976,"opsSec":78859730.42030084},{"name":"Using define property (writable)","samples":2218179,"opsSec":4436350.786493621},{"name":"Using define property initialized (writable)","samples":2989147,"opsSec":5977831.817955162},{"name":"Using define property (getter)","samples":1099830,"opsSec":2181712.8677852624}]}-->
