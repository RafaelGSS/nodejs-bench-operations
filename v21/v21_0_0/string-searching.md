## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|820,819,811|98|
|Using indexof|823,935,389|96|
|Using RegExp.test|16,932,440|94|
|Using RegExp.text with cached regex pattern|17,496,519|96|
|Using new RegExp.test|4,544,901|97|
|Using new RegExp.test with cached regex pattern|5,138,428|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":820819811.328139,"samples":6},{"name":"Using indexof","opsSec":823935388.9466988,"samples":7},{"name":"Using RegExp.test","opsSec":16932439.524971534,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":17496518.602528516,"samples":5},{"name":"Using new RegExp.test","opsSec":4544900.558378366,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5138427.761562769,"samples":4}]}-->
