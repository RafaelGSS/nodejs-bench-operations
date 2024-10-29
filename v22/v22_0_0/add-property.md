## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|102,312,562|51156286|
|Using dot notation|72,972,737|36490676|
|Using define property (writable)|4,741,894|2371138|
|Using define property initialized (writable)|6,964,798|3482597|
|Using define property (getter)|2,419,267|1214208|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:45:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":102312562.58724424,"samples":51156286},{"name":"Using dot notation","opsSec":72972737.42240182,"samples":36490676},{"name":"Using define property (writable)","opsSec":4741894.609416565,"samples":2371138},{"name":"Using define property initialized (writable)","opsSec":6964798.385522106,"samples":3482597},{"name":"Using define property (getter)","opsSec":2419267.819376096,"samples":1214208}]}-->
