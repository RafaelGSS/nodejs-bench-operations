## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|847,640,333|95|
|Using indexof|846,747,967|94|
|Using RegExp.test|15,094,076|98|
|Using RegExp.text with cached regex pattern|15,648,856|97|
|Using new RegExp.test|4,232,247|97|
|Using new RegExp.test with cached regex pattern|5,104,519|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":847640333.3987265,"samples":6},{"name":"Using indexof","opsSec":846747966.6731491,"samples":7},{"name":"Using RegExp.test","opsSec":15094076.18327157,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":15648855.56284358,"samples":5},{"name":"Using new RegExp.test","opsSec":4232246.824506711,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5104519.205738489,"samples":4}]}-->
