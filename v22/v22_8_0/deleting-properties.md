## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,027,628|2013816|
|Using delete property (proto: null)|16,077,434|8039562|
|Using delete property (cached proto: null)|3,953,469|1976736|
|Using undefined assignment|69,369,946|34684975|
|Using undefined assignment (proto: null)|17,906,217|8954499|
|Using undefined property (cached proto: null)|69,509,845|34754994|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:40:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":4027628.58457096,"samples":2013816},{"name":"Using delete property (proto: null)","opsSec":16077434.133053143,"samples":8039562},{"name":"Using delete property (cached proto: null)","opsSec":3953469.0111774276,"samples":1976736},{"name":"Using undefined assignment","opsSec":69369946.11528301,"samples":34684975},{"name":"Using undefined assignment (proto: null)","opsSec":17906217.3793156,"samples":8954499},{"name":"Using undefined property (cached proto: null)","opsSec":69509845.92187494,"samples":34754994}]}-->
