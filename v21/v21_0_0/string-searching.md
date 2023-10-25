## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|710,288,675|98|
|Using indexof|706,023,689|97|
|Using RegExp.test|11,854,762|98|
|Using RegExp.text with cached regex pattern|12,392,845|98|
|Using new RegExp.test|3,348,403|96|
|Using new RegExp.test with cached regex pattern|3,977,130|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":710288674.5983127,"samples":6},{"name":"Using indexof","opsSec":706023688.9442966,"samples":6},{"name":"Using RegExp.test","opsSec":11854761.545021065,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":12392845.232826713,"samples":5},{"name":"Using new RegExp.test","opsSec":3348403.4613065505,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3977130.0089877197,"samples":5}]}-->
