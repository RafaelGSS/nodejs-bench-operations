## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|23,494,059|11757016|
|Length = 10_000 - Array.at|20,987,781|10495476|
|Length = 1_000_000 - Array.at|21,379,868|10689937|
|Length = 100 - Array[length - 1]|102,240,074|51128837|
|Length = 10_000 - Array[length - 1]|102,778,160|51394349|
|Length = 1_000_000 - Array[length - 1]|102,693,697|51355552|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:05:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":23494059.65290095,"samples":11757016},{"name":"Length = 10_000 - Array.at","opsSec":20987781.291929103,"samples":10495476},{"name":"Length = 1_000_000 - Array.at","opsSec":21379868.270195305,"samples":10689937},{"name":"Length = 100 - Array[length - 1]","opsSec":102240074.18914893,"samples":51128837},{"name":"Length = 10_000 - Array[length - 1]","opsSec":102778160.15523928,"samples":51394349},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":102693697.4182876,"samples":51355552}]}-->
