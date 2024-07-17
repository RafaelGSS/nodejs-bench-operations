## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|17,900,474|8950238|
|~ (small)|19,635,950|9817976|
|Math.floor (long)|15,406,465|7703233|
|~ (long)|19,713,654|9856828|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Wed Jul 17 2024 13:24:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245231628417969},"benchmarks":[{"name":"Math.floor (small)","opsSec":17900474.388963614,"samples":8950238},{"name":"~ (small)","opsSec":19635950.50763279,"samples":9817976},{"name":"Math.floor (long)","opsSec":15406465.291272538,"samples":7703233},{"name":"~ (long)","opsSec":19713654.817160446,"samples":9856828}]}-->
