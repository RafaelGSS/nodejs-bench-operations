## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,054,727|96|
|Using indexof|898,143,633|91|
|Using RegExp.test|15,967,935|98|
|Using RegExp.text with cached regex pattern|16,623,174|96|
|Using new RegExp.test|4,446,592|97|
|Using new RegExp.test with cached regex pattern|5,237,410|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":17054726.713833977,"samples":5},{"name":"Using indexof","opsSec":898143632.8589185,"samples":9},{"name":"Using RegExp.test","opsSec":15967935.448548311,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":16623173.797732191,"samples":6},{"name":"Using new RegExp.test","opsSec":4446592.41465067,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5237409.5874417275,"samples":5}]}-->
