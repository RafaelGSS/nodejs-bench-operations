## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,084,133|7542069|
|Using dot notation|14,829,183|7414592|
|Using define property (writable)|2,843,328|1421665|
|Using define property initialized (writable)|3,627,291|1813646|
|Using define property (getter)|1,776,545|888273|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:17:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":15084133.324458163,"samples":7542069},{"name":"Using dot notation","opsSec":14829183.377337873,"samples":7414592},{"name":"Using define property (writable)","opsSec":2843328.5726163415,"samples":1421665},{"name":"Using define property initialized (writable)","opsSec":3627291.0062555242,"samples":1813646},{"name":"Using define property (getter)","opsSec":1776545.928948273,"samples":888273}]}-->
