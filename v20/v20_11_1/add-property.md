## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|936,994,505|96|
|Using dot notation|936,308,376|93|
|Using define property (writable)|4,666,643|94|
|Using define property initialized (writable)|7,010,394|92|
|Using define property (getter)|2,734,746|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 02 2024 22:20:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":936994505.3614669,"samples":6},{"name":"Using dot notation","opsSec":936308376.0557668,"samples":6},{"name":"Using define property (writable)","opsSec":4666643.457938467,"samples":5},{"name":"Using define property initialized (writable)","opsSec":7010393.946177148,"samples":5},{"name":"Using define property (getter)","opsSec":2734746.2887837035,"samples":4}]}-->
