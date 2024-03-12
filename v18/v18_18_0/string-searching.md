## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|821,611,165|97|
|Using indexof|821,647,292|96|
|Using RegExp.test|16,336,481|96|
|Using RegExp.text with cached regex pattern|16,968,128|96|
|Using new RegExp.test|3,533,319|96|
|Using new RegExp.test with cached regex pattern|3,959,302|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":821611165.4576256,"samples":6},{"name":"Using indexof","opsSec":821647291.712671,"samples":8},{"name":"Using RegExp.test","opsSec":16336480.835899271,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":16968128.4667644,"samples":6},{"name":"Using new RegExp.test","opsSec":3533318.807779178,"samples":8},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3959301.5992984693,"samples":5}]}-->
