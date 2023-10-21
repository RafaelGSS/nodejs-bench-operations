## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|577,281,385|97|
|Using dot notation|596,859,472|98|
|Using define property (writable)|3,012,047|98|
|Using define property initialized (writable)|4,192,037|96|
|Using define property (getter)|1,515,583|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":577281385.3039,"samples":6},{"name":"Using dot notation","opsSec":596859472.4835055,"samples":9},{"name":"Using define property (writable)","opsSec":3012046.7866212055,"samples":6},{"name":"Using define property initialized (writable)","opsSec":4192036.557638278,"samples":6},{"name":"Using define property (getter)","opsSec":1515583.4986692374,"samples":4}]}-->
