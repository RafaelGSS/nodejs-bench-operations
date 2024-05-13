## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,213,667|7606834|
|Using dot notation|15,200,001|7600001|
|Using define property (writable)|3,301,688|1650845|
|Using define property initialized (writable)|4,185,349|2092675|
|Using define property (getter)|2,233,480|1116741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:30:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15213667.574009797,"samples":7606834},{"name":"Using dot notation","opsSec":15200001.209614655,"samples":7600001},{"name":"Using define property (writable)","opsSec":3301688.8311983584,"samples":1650845},{"name":"Using define property initialized (writable)","opsSec":4185349.028993413,"samples":2092675},{"name":"Using define property (getter)","opsSec":2233480.315957311,"samples":1116741}]}-->
