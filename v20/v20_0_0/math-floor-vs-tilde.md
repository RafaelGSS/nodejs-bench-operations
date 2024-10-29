## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|141,568,208|70925809|
|~ (small)|101,480,933|50767297|
|Math.floor (long)|103,260,946|51643588|
|~ (long)|102,127,935|51092983|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:11:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":141568208.6392153,"samples":70925809},{"name":"~ (small)","opsSec":101480933.52085845,"samples":50767297},{"name":"Math.floor (long)","opsSec":103260946.68693206,"samples":51643588},{"name":"~ (long)","opsSec":102127935.68141061,"samples":51092983}]}-->
