## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|77,922,189|38964552|
|Using dot notation|65,797,001|32910385|
|Using define property (writable)|3,917,243|1959033|
|Using define property initialized (writable)|5,461,532|2731531|
|Using define property (getter)|2,013,981|1015135|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:08:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":38964552,"opsSec":77922189.02910118},{"name":"Using dot notation","samples":32910385,"opsSec":65797001.754274294},{"name":"Using define property (writable)","samples":1959033,"opsSec":3917243.48071738},{"name":"Using define property initialized (writable)","samples":2731531,"opsSec":5461532.934624293},{"name":"Using define property (getter)","samples":1015135,"opsSec":2013981.8732644091}]}-->
