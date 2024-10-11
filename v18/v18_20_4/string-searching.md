## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|153,361,714|76680892|
|Using indexof|15,542,922|7802268|
|Using RegExp.test|13,428,306|6714491|
|Using RegExp.text with cached regex pattern|14,717,636|7358821|
|Using new RegExp.test|4,270,962|2135651|
|Using new RegExp.test with cached regex pattern|4,977,970|2489034|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:39:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using includes","opsSec":153361714.06705838,"samples":76680892},{"name":"Using indexof","opsSec":15542922.394593127,"samples":7802268},{"name":"Using RegExp.test","opsSec":13428306.771022325,"samples":6714491},{"name":"Using RegExp.text with cached regex pattern","opsSec":14717636.112945555,"samples":7358821},{"name":"Using new RegExp.test","opsSec":4270962.057046032,"samples":2135651},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4977970.063416972,"samples":2489034}]}-->
