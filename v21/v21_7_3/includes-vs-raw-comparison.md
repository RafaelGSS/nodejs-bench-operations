## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,226,038|7613020|
|using Array.includes (first item)|14,690,061|7345031|
|Using raw comparison|15,304,652|7652327|
|Using raw comparison (first item)|15,243,915|7621958|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:43:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":15226038.842857173,"samples":7613020},{"name":"using Array.includes (first item)","opsSec":14690061.999978248,"samples":7345031},{"name":"Using raw comparison","opsSec":15304652.714373548,"samples":7652327},{"name":"Using raw comparison (first item)","opsSec":15243915.451285904,"samples":7621958}]}-->
