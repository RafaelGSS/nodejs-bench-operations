## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,209,673|7604837|
|~ (small)|15,297,351|7648676|
|Math.floor (long)|15,363,466|7681734|
|~ (long)|15,353,080|7676541|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Wed Jul 17 2024 13:26:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245231628417969},"benchmarks":[{"name":"Math.floor (small)","opsSec":15209673.99995339,"samples":7604837},{"name":"~ (small)","opsSec":15297351.204541449,"samples":7648676},{"name":"Math.floor (long)","opsSec":15363466.12567634,"samples":7681734},{"name":"~ (long)","opsSec":15353080.526094891,"samples":7676541}]}-->
