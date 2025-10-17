## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|71,335,616|35843576|
|Using dot notation|73,412,732|36786926|
|Using define property (writable)|4,955,154|2478274|
|Using define property initialized (writable)|6,819,212|3409612|
|Using define property (getter)|2,380,929|1195703|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:41:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":35843576,"opsSec":71335616.50208323},{"name":"Using dot notation","samples":36786926,"opsSec":73412732.34220125},{"name":"Using define property (writable)","samples":2478274,"opsSec":4955154.7888589455},{"name":"Using define property initialized (writable)","samples":3409612,"opsSec":6819212.270954894},{"name":"Using define property (getter)","samples":1195703,"opsSec":2380929.31103725}]}-->
