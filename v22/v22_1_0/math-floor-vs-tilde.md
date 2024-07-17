## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|16,089,703|8044852|
|~ (small)|16,027,482|8013742|
|Math.floor (long)|16,245,334|8122668|
|~ (long)|16,191,404|8095703|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Wed Jul 17 2024 13:30:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245231628417969},"benchmarks":[{"name":"Math.floor (small)","opsSec":16089703.581676682,"samples":8044852},{"name":"~ (small)","opsSec":16027482.493414884,"samples":8013742},{"name":"Math.floor (long)","opsSec":16245334.440399555,"samples":8122668},{"name":"~ (long)","opsSec":16191404.348551651,"samples":8095703}]}-->
