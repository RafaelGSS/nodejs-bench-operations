## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|97,494,014|48751961|
|Using dot notation|67,585,906|33801913|
|Using define property (writable)|4,785,017|2392885|
|Using define property initialized (writable)|6,618,185|3309425|
|Using define property (getter)|2,370,855|1185488|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 20:59:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Directly in the object","opsSec":97494014.07332578,"samples":48751961},{"name":"Using dot notation","opsSec":67585906.13767485,"samples":33801913},{"name":"Using define property (writable)","opsSec":4785017.9578676345,"samples":2392885},{"name":"Using define property initialized (writable)","opsSec":6618185.957693748,"samples":3309425},{"name":"Using define property (getter)","opsSec":2370855.3945860774,"samples":1185488}]}-->
