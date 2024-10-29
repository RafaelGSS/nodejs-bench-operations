## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|113,174,385|56641129|
|Using dot notation|73,084,169|36546972|
|Using define property (writable)|4,569,499|2285038|
|Using define property initialized (writable)|5,589,768|2795445|
|Using define property (getter)|2,159,559|1079780|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:42:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":113174385.38187571,"samples":56641129},{"name":"Using dot notation","opsSec":73084169.72314122,"samples":36546972},{"name":"Using define property (writable)","opsSec":4569499.877455451,"samples":2285038},{"name":"Using define property initialized (writable)","opsSec":5589768.658868419,"samples":2795445},{"name":"Using define property (getter)","opsSec":2159559.110261647,"samples":1079780}]}-->
