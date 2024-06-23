## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,056,630|528316|
|Using brackets {}|1,086,249|543125|
|Using '' + |1,073,635|536818|
|Using date.toString()|1,186,031|593016|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:17:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1056630.5777751736,"samples":528316},{"name":"Using brackets {}","opsSec":1086249.550292635,"samples":543125},{"name":"Using '' + ","opsSec":1073635.05949549,"samples":536818},{"name":"Using date.toString()","opsSec":1186031.6394460308,"samples":593016}]}-->
