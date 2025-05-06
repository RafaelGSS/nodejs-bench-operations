## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|74,958,454|37508422|
|Using dot notation|66,141,494|33289219|
|Using define property (writable)|4,507,891|2254178|
|Using define property initialized (writable)|5,954,708|2977356|
|Using define property (getter)|2,167,666|1085669|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:59:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":37508422,"opsSec":74958454.81179053},{"name":"Using dot notation","samples":33289219,"opsSec":66141494.71900227},{"name":"Using define property (writable)","samples":2254178,"opsSec":4507891.065131324},{"name":"Using define property initialized (writable)","samples":2977356,"opsSec":5954708.331899668},{"name":"Using define property (getter)","samples":1085669,"opsSec":2167666.514840489}]}-->
