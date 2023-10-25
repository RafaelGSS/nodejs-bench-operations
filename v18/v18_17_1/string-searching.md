## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|705,764,714|97|
|Using indexof|712,172,496|99|
|Using RegExp.test|11,654,762|97|
|Using RegExp.text with cached regex pattern|12,454,898|94|
|Using new RegExp.test|3,026,078|92|
|Using new RegExp.test with cached regex pattern|3,561,968|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":705764713.7092154,"samples":10},{"name":"Using indexof","opsSec":712172496.4821588,"samples":7},{"name":"Using RegExp.test","opsSec":11654761.932480443,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":12454897.624667134,"samples":5},{"name":"Using new RegExp.test","opsSec":3026078.310625579,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3561968.027697518,"samples":5}]}-->
