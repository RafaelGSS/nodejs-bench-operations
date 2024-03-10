## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,034,624|94|
|Using delete property (proto: null)|20,837,785|97|
|Using delete property (cached proto: null)|4,121,995|95|
|Using undefined assignment|820,150,987|94|
|Using undefined assignment (proto: null)|22,904,811|97|
|Using undefined property (cached proto: null)|818,890,030|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":4034624.1056352407,"samples":4},{"name":"Using delete property (proto: null)","opsSec":20837784.52190242,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":4121995.291200839,"samples":5},{"name":"Using undefined assignment","opsSec":820150986.9395106,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":22904810.661143754,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":818890029.8691102,"samples":8}]}-->
