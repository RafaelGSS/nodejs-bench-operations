## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,869,150|7934577|
|Using indexof|15,866,631|7933318|
|Using RegExp.test|12,589,194|6295516|
|Using RegExp.text with cached regex pattern|13,189,590|6594797|
|Using new RegExp.test|4,413,510|2206812|
|Using new RegExp.test with cached regex pattern|5,116,668|2558663|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:16:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":7934577,"opsSec":15869150.604001772},{"name":"Using indexof","samples":7933318,"opsSec":15866631.525609909},{"name":"Using RegExp.test","samples":6295516,"opsSec":12589194.330125242},{"name":"Using RegExp.text with cached regex pattern","samples":6594797,"opsSec":13189590.333293889},{"name":"Using new RegExp.test","samples":2206812,"opsSec":4413510.422722781},{"name":"Using new RegExp.test with cached regex pattern","samples":2558663,"opsSec":5116668.702505139}]}-->
