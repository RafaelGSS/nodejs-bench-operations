## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,625,513|7812757|
|~ (small)|15,683,567|7841784|
|Math.floor (long)|15,730,292|7865147|
|~ (long)|15,701,224|7850613|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Wed Jul 17 2024 13:24:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245231628417969},"benchmarks":[{"name":"Math.floor (small)","opsSec":15625513.062542114,"samples":7812757},{"name":"~ (small)","opsSec":15683567.092317142,"samples":7841784},{"name":"Math.floor (long)","opsSec":15730292.992416702,"samples":7865147},{"name":"~ (long)","opsSec":15701224.334761895,"samples":7850613}]}-->
