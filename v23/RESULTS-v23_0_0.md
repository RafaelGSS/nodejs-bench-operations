## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|90,874,298|45877240|
|Using dot notation|65,305,237|33162498|
|Using define property (writable)|4,206,061|2112781|
|Using define property initialized (writable)|3,041,001|1520502|
|Using define property (getter)|2,201,846|1102405|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:46:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":90874298.44406314,"samples":45877240},{"name":"Using dot notation","opsSec":65305237.990635306,"samples":33162498},{"name":"Using define property (writable)","opsSec":4206061.144292437,"samples":2112781},{"name":"Using define property initialized (writable)","opsSec":3041001.469886777,"samples":1520502},{"name":"Using define property (getter)","opsSec":2201846.54354443,"samples":1102405}]}-->
