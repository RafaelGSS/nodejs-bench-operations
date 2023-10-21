## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|662,440|96|
|Using brackets {}|671,277|97|
|Using '' + |673,280|95|
|Using date.toString()|729,625|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":662440.4410756422,"samples":6},{"name":"Using brackets {}","opsSec":671276.7889527377,"samples":3},{"name":"Using '' + ","opsSec":673279.6464200801,"samples":5},{"name":"Using date.toString()","opsSec":729625.2253810893,"samples":3}]}-->
