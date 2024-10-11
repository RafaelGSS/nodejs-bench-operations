## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|137,670,311|68856309|
|~ (small)|98,597,539|49315322|
|Math.floor (long)|97,263,164|48933368|
|~ (long)|99,263,858|49640842|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:11:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Math.floor (small)","opsSec":137670311.63789305,"samples":68856309},{"name":"~ (small)","opsSec":98597539.48172885,"samples":49315322},{"name":"Math.floor (long)","opsSec":97263164.95576145,"samples":48933368},{"name":"~ (long)","opsSec":99263858.1963451,"samples":49640842}]}-->
