## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|673,964|95|
|Using brackets {}|675,999|94|
|Using '' + |680,518|94|
|Using date.toString()|729,422|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":673963.971121304,"samples":6},{"name":"Using brackets {}","opsSec":675999.3141837417,"samples":3},{"name":"Using '' + ","opsSec":680518.4572787951,"samples":4},{"name":"Using date.toString()","opsSec":729422.1617296027,"samples":3}]}-->
