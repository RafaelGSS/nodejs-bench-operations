## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|96,683,454|48343422|
|Using dot notation|67,083,957|33543369|
|Using define property (writable)|4,807,313|2403659|
|Using define property initialized (writable)|6,840,935|3420772|
|Using define property (getter)|2,431,391|1215736|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:01:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Directly in the object","opsSec":96683454.8581734,"samples":48343422},{"name":"Using dot notation","opsSec":67083957.638291724,"samples":33543369},{"name":"Using define property (writable)","opsSec":4807313.596500745,"samples":2403659},{"name":"Using define property initialized (writable)","opsSec":6840935.252535618,"samples":3420772},{"name":"Using define property (getter)","opsSec":2431391.642506215,"samples":1215736}]}-->
