## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|847,916,393|98|
|[async] async function|17,488,480|90|
|[async] function|180,264|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:18:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":847916392.9586813,"samples":6},{"name":"[async] async function","opsSec":17488480.37700695,"samples":7},{"name":"[async] function","opsSec":180263.85988632138,"samples":3}]}-->
