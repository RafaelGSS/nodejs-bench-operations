## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|136,110,649|68057511|
|Using indexof|15,461,029|7730675|
|Using RegExp.test|12,788,749|6394377|
|Using RegExp.text with cached regex pattern|13,826,561|6913323|
|Using new RegExp.test|4,720,897|2360990|
|Using new RegExp.test with cached regex pattern|5,464,275|2732303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:03:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using includes","opsSec":136110649.03706774,"samples":68057511},{"name":"Using indexof","opsSec":15461029.029037358,"samples":7730675},{"name":"Using RegExp.test","opsSec":12788749.728557589,"samples":6394377},{"name":"Using RegExp.text with cached regex pattern","opsSec":13826561.215526627,"samples":6913323},{"name":"Using new RegExp.test","opsSec":4720897.299971431,"samples":2360990},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5464275.924948477,"samples":2732303}]}-->
