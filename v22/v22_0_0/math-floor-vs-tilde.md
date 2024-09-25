## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,718,252|7359127|
|~ (small)|14,946,089|7473051|
|Math.floor (long)|14,758,233|7379117|
|~ (long)|15,016,215|7508108|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:57:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":14718252.734196693,"samples":7359127},{"name":"~ (small)","opsSec":14946089.116164938,"samples":7473051},{"name":"Math.floor (long)","opsSec":14758233.557007695,"samples":7379117},{"name":"~ (long)","opsSec":15016215.158937613,"samples":7508108}]}-->
