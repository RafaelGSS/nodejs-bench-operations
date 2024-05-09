## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,226,035|8113018|
|Length = 10_000 - Array.at|16,288,002|8144002|
|Length = 1_000_000 - Array.at|16,352,996|8176499|
|Length = 100 - Array[length - 1]|16,284,992|8142497|
|Length = 10_000 - Array[length - 1]|16,259,356|8129679|
|Length = 1_000_000 - Array[length - 1]|16,286,055|8143028|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:57:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":16226035.961314116,"samples":8113018},{"name":"Length = 10_000 - Array.at","opsSec":16288002.920425221,"samples":8144002},{"name":"Length = 1_000_000 - Array.at","opsSec":16352996.151941258,"samples":8176499},{"name":"Length = 100 - Array[length - 1]","opsSec":16284992.974981751,"samples":8142497},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16259356.294325646,"samples":8129679},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16286055.456394251,"samples":8143028}]}-->
