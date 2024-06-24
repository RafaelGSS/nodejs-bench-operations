## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,011,703|1505852|
|Adding property in the object creation - small object|2,964,399|1482200|
|Adding property after the function creation - small class|208,688|104345|
|Adding property in the function creation - small class|213,631|106817|
|Adding property after the class creation - small class|192,295|96148|
|Adding property in the class creation - small class|184,646|92324|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:26:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3011703.3430888564,"samples":1505852},{"name":"Adding property in the object creation - small object","opsSec":2964399.023500891,"samples":1482200},{"name":"Adding property after the function creation - small class","opsSec":208688.48828464694,"samples":104345},{"name":"Adding property in the function creation - small class","opsSec":213631.77867337572,"samples":106817},{"name":"Adding property after the class creation - small class","opsSec":192295.2643195483,"samples":96148},{"name":"Adding property in the class creation - small class","opsSec":184646.83526898813,"samples":92324}]}-->
