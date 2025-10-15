## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|106,473,286|53263195|
|Using dot notation|75,310,054|37655048|
|Using define property (writable)|5,000,960|2500675|
|Using define property initialized (writable)|7,177,476|3588880|
|Using define property (getter)|2,385,261|1192633|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:47:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":53263195,"opsSec":106473286.02270302},{"name":"Using dot notation","samples":37655048,"opsSec":75310054.27822992},{"name":"Using define property (writable)","samples":2500675,"opsSec":5000960.715216006},{"name":"Using define property initialized (writable)","samples":3588880,"opsSec":7177476.216945334},{"name":"Using define property (getter)","samples":1192633,"opsSec":2385261.534790407}]}-->
