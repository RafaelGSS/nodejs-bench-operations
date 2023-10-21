## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|714,425,960|96|
|Using dot notation|715,431,223|98|
|Using define property (writable)|3,158,485|91|
|Using define property initialized (writable)|4,124,274|91|
|Using define property (getter)|1,669,905|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":714425960.3726394,"samples":6},{"name":"Using dot notation","opsSec":715431223.2614391,"samples":6},{"name":"Using define property (writable)","opsSec":3158485.3118226384,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4124274.4847405734,"samples":6},{"name":"Using define property (getter)","opsSec":1669905.1233866913,"samples":4}]}-->
