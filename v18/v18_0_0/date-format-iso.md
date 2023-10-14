## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,571,119|90|
|fromUnixToISOString(new Date())|1,352,076|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Date().toISOString()","hz":1571118.91503789,"cycles":4,"stats":{"deviation":9.626898528044436e-8,"mean":6.364890591212082e-7,"moe":1.988937841926928e-8,"rme":3.1248578642860374,"sem":1.0147642050647592e-8,"variance":9.267717526926412e-15}},{"name":"fromUnixToISOString(new Date())","hz":1352076.1021717,"cycles":4,"stats":{"deviation":2.832049198300723e-8,"mean":7.396033391861623e-7,"moe":5.607171339762627e-9,"rme":0.7581322369275121,"sem":2.860801703960524e-9,"variance":8.02050266159577e-16}}]}-->
