## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,204,062|83|
|Using delete property (proto: null)|13,252,680|85|
|Using delete property (cached proto: null)|2,326,496|85|
|Using undefined assignment|830,816,079|83|
|Using undefined assignment (proto: null)|14,665,888|81|
|Using undefined property (cached proto: null)|709,228,405|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2204062.105778394,"samples":6},{"name":"Using delete property (proto: null)","opsSec":13252680.342019182,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2326495.7532857955,"samples":4},{"name":"Using undefined assignment","opsSec":830816078.5860058,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":14665887.891578779,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":709228404.7937949,"samples":7}]}-->
