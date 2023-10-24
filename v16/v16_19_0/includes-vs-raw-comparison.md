## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|635,284,986|85|
|using Array.includes (first item)|653,263,546|87|
|Using raw comparison|636,489,137|86|
|Using raw comparison (first item)|658,467,216|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":635284985.6521717,"samples":6},{"name":"using Array.includes (first item)","opsSec":653263545.6097763,"samples":6},{"name":"Using raw comparison","opsSec":636489137.272882,"samples":9},{"name":"Using raw comparison (first item)","opsSec":658467215.7906442,"samples":6}]}-->
