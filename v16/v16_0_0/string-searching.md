## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|12,622,704|96|
|Using indexof|699,561,256|93|
|Using RegExp.test|11,609,023|95|
|Using RegExp.text with cached regex pattern|12,200,460|98|
|Using new RegExp.test|3,132,692|96|
|Using new RegExp.test with cached regex pattern|3,701,748|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":12622703.729015052,"samples":6},{"name":"Using indexof","opsSec":699561255.8077435,"samples":8},{"name":"Using RegExp.test","opsSec":11609022.6003699,"samples":9},{"name":"Using RegExp.text with cached regex pattern","opsSec":12200459.630489372,"samples":7},{"name":"Using new RegExp.test","opsSec":3132691.9476445634,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3701747.6932864753,"samples":7}]}-->
