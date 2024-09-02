## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,910,105|8955053|
|Using dot notation|17,962,004|8981003|
|Using define property (writable)|3,354,606|1677304|
|Using define property initialized (writable)|3,928,648|1964325|
|Using define property (getter)|1,884,745|942373|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:15:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":17910105.570393708,"samples":8955053},{"name":"Using dot notation","opsSec":17962004.526334383,"samples":8981003},{"name":"Using define property (writable)","opsSec":3354606.7520771767,"samples":1677304},{"name":"Using define property initialized (writable)","opsSec":3928648.9392394447,"samples":1964325},{"name":"Using define property (getter)","opsSec":1884745.9057554598,"samples":942373}]}-->
