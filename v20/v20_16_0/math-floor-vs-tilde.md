## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|17,809,573|8904787|
|~ (small)|18,756,333|9378167|
|Math.floor (long)|17,497,723|8748862|
|~ (long)|18,597,144|9298573|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:53:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":17809573.430109397,"samples":8904787},{"name":"~ (small)","opsSec":18756333.850072376,"samples":9378167},{"name":"Math.floor (long)","opsSec":17497723.160209835,"samples":8748862},{"name":"~ (long)","opsSec":18597144.51243821,"samples":9298573}]}-->
