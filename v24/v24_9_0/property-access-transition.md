## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,348,498|3674290|
|Adding property in the object creation - small object|7,394,150|3697077|
|Adding property after the function creation - small class|275,386|137695|
|Adding property in the function creation - small class|281,506|140755|
|Adding property after the class creation - small class|272,497|139928|
|Adding property in the class creation - small class|278,505|139253|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:13:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3674290,"opsSec":7348498.490454744},{"name":"Adding property in the object creation - small object","samples":3697077,"opsSec":7394150.598690724},{"name":"Adding property after the function creation - small class","samples":137695,"opsSec":275386.26631300134},{"name":"Adding property in the function creation - small class","samples":140755,"opsSec":281506.06060418795},{"name":"Adding property after the class creation - small class","samples":139928,"opsSec":272497.98754059},{"name":"Adding property in the class creation - small class","samples":139253,"opsSec":278505.44131808466}]}-->
