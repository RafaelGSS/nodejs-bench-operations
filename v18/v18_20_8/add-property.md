## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|85,107,840|42559686|
|Using dot notation|75,180,168|37656450|
|Using define property (writable)|3,841,248|1920773|
|Using define property initialized (writable)|5,572,328|2787454|
|Using define property (getter)|2,067,297|1034840|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:49:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":42559686,"opsSec":85107840.05788785},{"name":"Using dot notation","samples":37656450,"opsSec":75180168.2101423},{"name":"Using define property (writable)","samples":1920773,"opsSec":3841248.7180792107},{"name":"Using define property initialized (writable)","samples":2787454,"opsSec":5572328.179222865},{"name":"Using define property (getter)","samples":1034840,"opsSec":2067297.25798801}]}-->
