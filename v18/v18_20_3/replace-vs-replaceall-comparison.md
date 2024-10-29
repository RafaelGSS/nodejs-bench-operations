## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,362,633|1681581|
|Using replaceAll()|2,932,382|1466282|
|Using replaceAll(//g)|2,987,155|1494113|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:05:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3362633.864725206,"samples":1681581},{"name":"Using replaceAll()","opsSec":2932382.919489956,"samples":1466282},{"name":"Using replaceAll(//g)","opsSec":2987155.1467000796,"samples":1494113}]}-->
