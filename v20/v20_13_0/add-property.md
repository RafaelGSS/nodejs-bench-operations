## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|19,951,464|9975733|
|Using dot notation|19,983,675|9991838|
|Using define property (writable)|3,598,668|1799335|
|Using define property initialized (writable)|4,242,706|2121354|
|Using define property (getter)|2,211,285|1105643|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:26:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":19951464.28418712,"samples":9975733},{"name":"Using dot notation","opsSec":19983675.120698586,"samples":9991838},{"name":"Using define property (writable)","opsSec":3598668.0135329342,"samples":1799335},{"name":"Using define property initialized (writable)","opsSec":4242706.498081237,"samples":2121354},{"name":"Using define property (getter)","opsSec":2211285.310079932,"samples":1105643}]}-->
