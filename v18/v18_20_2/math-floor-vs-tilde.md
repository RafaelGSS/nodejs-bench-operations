## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|17,206,910|8603456|
|~ (small)|17,310,323|8655162|
|Math.floor (long)|17,159,485|8579743|
|~ (long)|17,324,448|8662225|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Wed Jul 17 2024 13:22:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245231628417969},"benchmarks":[{"name":"Math.floor (small)","opsSec":17206910.141596485,"samples":8603456},{"name":"~ (small)","opsSec":17310323.099294864,"samples":8655162},{"name":"Math.floor (long)","opsSec":17159485.588424157,"samples":8579743},{"name":"~ (long)","opsSec":17324448.925770607,"samples":8662225}]}-->
