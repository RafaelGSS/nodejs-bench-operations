## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|105,354,657|52677580|
|Using dot notation|72,858,303|36505473|
|Using define property (writable)|4,933,376|2466690|
|Using define property initialized (writable)|6,866,553|3433432|
|Using define property (getter)|2,455,899|1227986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:45:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":105354657.66899224,"samples":52677580},{"name":"Using dot notation","opsSec":72858303.48270552,"samples":36505473},{"name":"Using define property (writable)","opsSec":4933376.793305084,"samples":2466690},{"name":"Using define property initialized (writable)","opsSec":6866553.769100712,"samples":3433432},{"name":"Using define property (getter)","opsSec":2455899.742517776,"samples":1227986}]}-->
