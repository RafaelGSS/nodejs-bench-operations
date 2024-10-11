## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|23,282,965|11641491|
|Length = 10_000 - Array.at|21,299,810|10649912|
|Length = 1_000_000 - Array.at|21,243,575|10622779|
|Length = 100 - Array[length - 1]|91,304,344|45652194|
|Length = 10_000 - Array[length - 1]|101,099,362|50560613|
|Length = 1_000_000 - Array[length - 1]|101,187,398|50593710|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:28:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":23282965.888187606,"samples":11641491},{"name":"Length = 10_000 - Array.at","opsSec":21299810.79411731,"samples":10649912},{"name":"Length = 1_000_000 - Array.at","opsSec":21243575.592012905,"samples":10622779},{"name":"Length = 100 - Array[length - 1]","opsSec":91304344.3565234,"samples":45652194},{"name":"Length = 10_000 - Array[length - 1]","opsSec":101099362.04976441,"samples":50560613},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":101187398.95302103,"samples":50593710}]}-->
