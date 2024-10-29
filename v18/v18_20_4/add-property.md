## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|116,901,731|58453830|
|Using dot notation|74,760,492|37576596|
|Using define property (writable)|3,743,952|1872162|
|Using define property initialized (writable)|5,564,682|2782369|
|Using define property (getter)|2,091,801|1051458|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:42:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":116901731.67938308,"samples":58453830},{"name":"Using dot notation","opsSec":74760492.7749296,"samples":37576596},{"name":"Using define property (writable)","opsSec":3743952.045852149,"samples":1872162},{"name":"Using define property initialized (writable)","opsSec":5564682.698183346,"samples":2782369},{"name":"Using define property (getter)","opsSec":2091801.522198424,"samples":1051458}]}-->
