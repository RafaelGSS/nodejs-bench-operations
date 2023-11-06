## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|850,699,743|98|
|Using dot notation|849,442,752|98|
|Using define property (writable)|4,707,495|97|
|Using define property initialized (writable)|6,360,808|94|
|Using define property (getter)|2,421,739|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:55:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":850699743.4149878,"samples":6},{"name":"Using dot notation","opsSec":849442752.3704557,"samples":6},{"name":"Using define property (writable)","opsSec":4707494.521037831,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6360808.377786787,"samples":5},{"name":"Using define property (getter)","opsSec":2421738.7781395996,"samples":4}]}-->
