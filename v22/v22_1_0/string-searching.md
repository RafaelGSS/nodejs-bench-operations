## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,053,499|8026750|
|Using indexof|16,063,267|8031634|
|Using RegExp.test|8,461,905|4230953|
|Using RegExp.text with cached regex pattern|8,655,657|4327829|
|Using new RegExp.test|3,785,655|1892828|
|Using new RegExp.test with cached regex pattern|4,037,602|2018802|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:56:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16053499.775249373,"samples":8026750},{"name":"Using indexof","opsSec":16063267.775119228,"samples":8031634},{"name":"Using RegExp.test","opsSec":8461905.526139349,"samples":4230953},{"name":"Using RegExp.text with cached regex pattern","opsSec":8655657.999996599,"samples":4327829},{"name":"Using new RegExp.test","opsSec":3785655.7804319593,"samples":1892828},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4037602.457630521,"samples":2018802}]}-->
