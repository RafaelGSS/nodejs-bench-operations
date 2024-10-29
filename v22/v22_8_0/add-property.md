## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|97,992,566|49062546|
|Using dot notation|68,204,549|34143479|
|Using define property (writable)|4,733,358|2366681|
|Using define property initialized (writable)|6,717,229|3359660|
|Using define property (getter)|2,400,392|1200259|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:45:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":97992566.26542723,"samples":49062546},{"name":"Using dot notation","opsSec":68204549.30766262,"samples":34143479},{"name":"Using define property (writable)","opsSec":4733358.478381292,"samples":2366681},{"name":"Using define property initialized (writable)","opsSec":6717229.786172977,"samples":3359660},{"name":"Using define property (getter)","opsSec":2400392.14743971,"samples":1200259}]}-->
