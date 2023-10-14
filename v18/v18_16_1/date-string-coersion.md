## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|567,586|88|
|Using brackets {}|591,682|94|
|Using '' + |600,729|88|
|Using date.toString()|650,196|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using String()","hz":567586.4903983873,"cycles":4,"stats":{"deviation":2.3145622144543608e-7,"mean":0.0000017618460215607015,"moe":4.835969957278718e-8,"rme":2.7448312157238663,"sem":2.4673316108564888e-8,"variance":5.357198244579874e-14}},{"name":"Using brackets {}","hz":591681.7635169401,"cycles":3,"stats":{"deviation":9.141339981341943e-8,"mean":0.0000016900977208694547,"moe":1.848000166102084e-8,"rme":1.0934279972588792,"sem":9.428572276031041e-9,"variance":8.35640966544807e-15}},{"name":"Using '' + ","hz":600728.6669391219,"cycles":5,"stats":{"deviation":4.928821775571911e-8,"mean":0.000001664645046981486,"moe":1.0298117666742418e-8,"rme":0.6186374497924393,"sem":5.254141666705315e-9,"variance":2.4293284095351845e-15}},{"name":"Using date.toString()","hz":650196.4858647827,"cycles":3,"stats":{"deviation":5.510604463819193e-8,"mean":0.0000015379966236974769,"moe":1.1322298877163803e-8,"rme":0.7361718941842679,"sem":5.776683100593777e-9,"variance":3.036676155666402e-15}}]}-->
