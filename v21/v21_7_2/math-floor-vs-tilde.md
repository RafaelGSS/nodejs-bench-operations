## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|141,245,277|70622770|
|~ (small)|96,330,168|48174301|
|Math.floor (long)|97,137,384|48568737|
|~ (long)|103,618,719|51811947|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:13:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":141245277.84876433,"samples":70622770},{"name":"~ (small)","opsSec":96330168.45162544,"samples":48174301},{"name":"Math.floor (long)","opsSec":97137384.82788073,"samples":48568737},{"name":"~ (long)","opsSec":103618719.073932,"samples":51811947}]}-->
