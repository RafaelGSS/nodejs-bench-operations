## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,299,216|7149609|
|~ (small)|14,408,219|7204110|
|Math.floor (long)|14,590,727|7295364|
|~ (long)|14,562,571|7281286|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:49:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":14299216.267434502,"samples":7149609},{"name":"~ (small)","opsSec":14408219.052129893,"samples":7204110},{"name":"Math.floor (long)","opsSec":14590727.70034256,"samples":7295364},{"name":"~ (long)","opsSec":14562571.034326352,"samples":7281286}]}-->
