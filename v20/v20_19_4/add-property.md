## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|88,445,149|44222580|
|Using dot notation|85,813,009|42985212|
|Using define property (writable)|4,478,334|2239173|
|Using define property initialized (writable)|5,990,453|2995231|
|Using define property (getter)|2,213,853|1120605|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:48:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":44222580,"opsSec":88445149.03280151},{"name":"Using dot notation","samples":42985212,"opsSec":85813009.81617534},{"name":"Using define property (writable)","samples":2239173,"opsSec":4478334.3473740285},{"name":"Using define property initialized (writable)","samples":2995231,"opsSec":5990453.313842694},{"name":"Using define property (getter)","samples":1120605,"opsSec":2213853.951331469}]}-->
