## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|11,850,810|97|
|Using indexof|707,245,385|95|
|Using RegExp.test|10,600,509|95|
|Using RegExp.text with cached regex pattern|11,197,197|95|
|Using new RegExp.test|3,106,584|97|
|Using new RegExp.test with cached regex pattern|3,724,192|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":11850809.86557904,"samples":5},{"name":"Using indexof","opsSec":707245384.5389916,"samples":7},{"name":"Using RegExp.test","opsSec":10600508.68710348,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":11197196.977843337,"samples":7},{"name":"Using new RegExp.test","opsSec":3106583.9777776427,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3724191.665522688,"samples":5}]}-->
