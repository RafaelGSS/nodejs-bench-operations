## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|998,720|96|
|Using brackets {}|1,014,273|97|
|Using '' + |1,045,013|97|
|Using date.toString()|1,134,913|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:21:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":998719.9993017426,"samples":6},{"name":"Using brackets {}","opsSec":1014272.9504649825,"samples":7},{"name":"Using '' + ","opsSec":1045012.9521203238,"samples":6},{"name":"Using date.toString()","opsSec":1134912.55583046,"samples":5}]}-->
