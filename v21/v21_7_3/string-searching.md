## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,336,130|7668066|
|Using indexof|15,334,515|7667258|
|Using RegExp.test|7,501,180|3750591|
|Using RegExp.text with cached regex pattern|7,429,341|3714671|
|Using new RegExp.test|3,571,064|1785533|
|Using new RegExp.test with cached regex pattern|3,698,560|1849281|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:23:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":15336130.92646412,"samples":7668066},{"name":"Using indexof","opsSec":15334515.29463691,"samples":7667258},{"name":"Using RegExp.test","opsSec":7501180.439767885,"samples":3750591},{"name":"Using RegExp.text with cached regex pattern","opsSec":7429341.524514332,"samples":3714671},{"name":"Using new RegExp.test","opsSec":3571064.235892566,"samples":1785533},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3698560.786873387,"samples":1849281}]}-->
