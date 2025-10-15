## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|106,734,349|53368519|
|Using dot notation|80,134,519|40080109|
|Using define property (writable)|4,831,436|2415720|
|Using define property initialized (writable)|6,971,426|3486339|
|Using define property (getter)|2,399,654|1209255|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:49:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":53368519,"opsSec":106734349.57520291},{"name":"Using dot notation","samples":40080109,"opsSec":80134519.18023698},{"name":"Using define property (writable)","samples":2415720,"opsSec":4831436.30878266},{"name":"Using define property initialized (writable)","samples":3486339,"opsSec":6971426.3779938},{"name":"Using define property (getter)","samples":1209255,"opsSec":2399654.7845202754}]}-->
