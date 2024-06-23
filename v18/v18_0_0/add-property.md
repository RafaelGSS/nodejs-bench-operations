## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|20,321,841|10160921|
|Using dot notation|20,603,142|10301572|
|Using define property (writable)|3,703,781|1851891|
|Using define property initialized (writable)|4,405,291|2202646|
|Using define property (getter)|2,144,224|1072115|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:36:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":20321841.227994815,"samples":10160921},{"name":"Using dot notation","opsSec":20603142.92914649,"samples":10301572},{"name":"Using define property (writable)","opsSec":3703781.4073495544,"samples":1851891},{"name":"Using define property initialized (writable)","opsSec":4405291.797344136,"samples":2202646},{"name":"Using define property (getter)","opsSec":2144224.309231562,"samples":1072115}]}-->
