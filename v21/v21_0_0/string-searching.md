## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|135,563,051|67782765|
|Using indexof|15,884,570|7942526|
|Using RegExp.test|13,231,719|6616686|
|Using RegExp.text with cached regex pattern|14,451,034|7225525|
|Using new RegExp.test|4,559,621|2280019|
|Using new RegExp.test with cached regex pattern|5,285,915|2644464|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:53:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":135563051.36516884,"samples":67782765},{"name":"Using indexof","opsSec":15884570.28452155,"samples":7942526},{"name":"Using RegExp.test","opsSec":13231719.464092689,"samples":6616686},{"name":"Using RegExp.text with cached regex pattern","opsSec":14451034.797511393,"samples":7225525},{"name":"Using new RegExp.test","opsSec":4559621.870669596,"samples":2280019},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5285915.282013186,"samples":2644464}]}-->
