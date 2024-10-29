## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|103,670,460|51842768|
|Using dot notation|74,170,400|37111111|
|Using define property (writable)|4,185,897|2093102|
|Using define property initialized (writable)|5,836,156|2918273|
|Using define property (getter)|2,215,100|1107559|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:44:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":103670460.24167167,"samples":51842768},{"name":"Using dot notation","opsSec":74170400.03154276,"samples":37111111},{"name":"Using define property (writable)","opsSec":4185897.1569948033,"samples":2093102},{"name":"Using define property initialized (writable)","opsSec":5836156.448229393,"samples":2918273},{"name":"Using define property (getter)","opsSec":2215100.3899518996,"samples":1107559}]}-->
