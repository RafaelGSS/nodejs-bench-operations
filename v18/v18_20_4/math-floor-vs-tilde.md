## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|146,740,141|73370095|
|~ (small)|98,744,780|49372399|
|Math.floor (long)|105,171,463|52609556|
|~ (long)|106,802,917|53405557|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:11:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":146740141.86923346,"samples":73370095},{"name":"~ (small)","opsSec":98744780.02845004,"samples":49372399},{"name":"Math.floor (long)","opsSec":105171463.64770855,"samples":52609556},{"name":"~ (long)","opsSec":106802917.30330865,"samples":53405557}]}-->
