## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|903,929,235|96|
|Length = 10_000 - Array.at|903,990,922|98|
|Length = 1_000_000 - Array.at|903,315,134|97|
|Length = 100 - Array[length - 1]|823,302,357|97|
|Length = 10_000 - Array[length - 1]|817,230,766|95|
|Length = 1_000_000 - Array[length - 1]|822,334,924|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":903929235.3235872,"samples":9},{"name":"Length = 10_000 - Array.at","opsSec":903990922.0074391,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":903315134.212804,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":823302356.8809669,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":817230765.5700922,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":822334923.7325208,"samples":7}]}-->
