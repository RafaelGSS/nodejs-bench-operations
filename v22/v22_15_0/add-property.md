## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|92,649,459|46333303|
|Using dot notation|63,154,814|31776183|
|Using define property (writable)|4,897,941|2449009|
|Using define property initialized (writable)|6,789,759|3395197|
|Using define property (getter)|2,421,244|1216326|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:59:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":46333303,"opsSec":92649459.17929077},{"name":"Using dot notation","samples":31776183,"opsSec":63154814.526372746},{"name":"Using define property (writable)","samples":2449009,"opsSec":4897941.905574555},{"name":"Using define property initialized (writable)","samples":3395197,"opsSec":6789759.551288008},{"name":"Using define property (getter)","samples":1216326,"opsSec":2421244.312265251}]}-->
