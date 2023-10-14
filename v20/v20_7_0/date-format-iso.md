## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|948,782|87|
|fromUnixToISOString(new Date())|1,528,613|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Date().toISOString()","hz":948782.4010479939,"cycles":5,"stats":{"deviation":5.666947805033787e-8,"mean":0.0000010539824504495791,"moe":1.190818732105457e-8,"rme":1.1298278558599435,"sem":6.07560577604825e-9,"variance":3.2114297424977256e-15}},{"name":"fromUnixToISOString(new Date())","hz":1528613.1560169675,"cycles":5,"stats":{"deviation":2.4620438204093057e-8,"mean":6.541877492443223e-7,"moe":5.086635232135491e-9,"rme":0.7775497535701733,"sem":2.5952220572119854e-9,"variance":6.06165977361565e-16}}]}-->
