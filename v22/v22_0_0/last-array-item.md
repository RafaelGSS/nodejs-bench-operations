## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,640,338|7820170|
|Length = 10_000 - Array.at|15,596,283|7798142|
|Length = 1_000_000 - Array.at|15,623,696|7811849|
|Length = 100 - Array[length - 1]|15,363,001|7681501|
|Length = 10_000 - Array[length - 1]|15,493,572|7746787|
|Length = 1_000_000 - Array[length - 1]|15,376,503|7688252|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:00:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15640338.842598615,"samples":7820170},{"name":"Length = 10_000 - Array.at","opsSec":15596283.563313983,"samples":7798142},{"name":"Length = 1_000_000 - Array.at","opsSec":15623696.375103652,"samples":7811849},{"name":"Length = 100 - Array[length - 1]","opsSec":15363001.139656832,"samples":7681501},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15493572.667589953,"samples":7746787},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15376503.815605072,"samples":7688252}]}-->
