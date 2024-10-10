## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|133,620,274|66861266|
|~ (small)|96,310,347|48155181|
|Math.floor (long)|98,838,987|49420439|
|~ (long)|91,351,461|45675736|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:28:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":133620274.54181753,"samples":66861266},{"name":"~ (small)","opsSec":96310347.55344787,"samples":48155181},{"name":"Math.floor (long)","opsSec":98838987.80319725,"samples":49420439},{"name":"~ (long)","opsSec":91351461.58593337,"samples":45675736}]}-->
