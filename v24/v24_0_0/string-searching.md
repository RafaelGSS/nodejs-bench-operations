## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,006,012|8004924|
|Using indexof|15,345,287|7672668|
|Using RegExp.test|12,608,581|6305545|
|Using RegExp.text with cached regex pattern|13,339,192|6669937|
|Using new RegExp.test|4,620,784|2310402|
|Using new RegExp.test with cached regex pattern|5,138,903|2570641|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:16:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":8004924,"opsSec":16006012.831277523},{"name":"Using indexof","samples":7672668,"opsSec":15345287.570272429},{"name":"Using RegExp.test","samples":6305545,"opsSec":12608581.194948154},{"name":"Using RegExp.text with cached regex pattern","samples":6669937,"opsSec":13339192.87413346},{"name":"Using new RegExp.test","samples":2310402,"opsSec":4620784.648153894},{"name":"Using new RegExp.test with cached regex pattern","samples":2570641,"opsSec":5138903.057885219}]}-->
