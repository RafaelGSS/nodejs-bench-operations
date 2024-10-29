## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|141,704,999|70854895|
|~ (small)|93,488,711|46750300|
|Math.floor (long)|93,852,244|46926128|
|~ (long)|95,386,481|47693246|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:12:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":141704999.8041866,"samples":70854895},{"name":"~ (small)","opsSec":93488711.22757062,"samples":46750300},{"name":"Math.floor (long)","opsSec":93852244.9254351,"samples":46926128},{"name":"~ (long)","opsSec":95386481.88903292,"samples":47693246}]}-->
