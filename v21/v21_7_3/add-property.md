## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|101,201,863|50609978|
|Using dot notation|70,660,815|35334950|
|Using define property (writable)|4,206,612|2103308|
|Using define property initialized (writable)|5,963,283|2981843|
|Using define property (getter)|2,245,392|1122727|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:44:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":101201863.13090946,"samples":50609978},{"name":"Using dot notation","opsSec":70660815.98681837,"samples":35334950},{"name":"Using define property (writable)","opsSec":4206612.760908174,"samples":2103308},{"name":"Using define property initialized (writable)","opsSec":5963283.609548595,"samples":2981843},{"name":"Using define property (getter)","opsSec":2245392.3505076244,"samples":1122727}]}-->
