## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|139,703,749|69851883|
|~ (small)|97,410,047|48717361|
|Math.floor (long)|98,547,559|49273785|
|~ (long)|99,598,000|49799006|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:30:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Math.floor (small)","opsSec":139703749.51495755,"samples":69851883},{"name":"~ (small)","opsSec":97410047.25574975,"samples":48717361},{"name":"Math.floor (long)","opsSec":98547559.55395867,"samples":49273785},{"name":"~ (long)","opsSec":99598000.24743597,"samples":49799006}]}-->
