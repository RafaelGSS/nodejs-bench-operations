## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|81,417,988|40709516|
|Using dot notation|76,899,991|38461944|
|Using define property (writable)|4,556,645|2279209|
|Using define property initialized (writable)|6,029,020|3014611|
|Using define property (getter)|2,162,023|1081012|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:42:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":40709516,"opsSec":81417988.38422489},{"name":"Using dot notation","samples":38461944,"opsSec":76899991.17394271},{"name":"Using define property (writable)","samples":2279209,"opsSec":4556645.0731950505},{"name":"Using define property initialized (writable)","samples":3014611,"opsSec":6029020.58248038},{"name":"Using define property (getter)","samples":1081012,"opsSec":2162023.22167164}]}-->
