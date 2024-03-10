## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|822,665,091|95|
|[async] async function|17,336,653|89|
|[async] function|186,335|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":822665091.0789245,"samples":7},{"name":"[async] async function","opsSec":17336653.28136399,"samples":10},{"name":"[async] function","opsSec":186335.1928222448,"samples":3}]}-->
