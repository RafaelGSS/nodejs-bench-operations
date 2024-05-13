## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,912,079|7956040|
|Using parseInt(x, 10) - big number (10 len)|15,808,049|7904025|
|Using + - small number (2 len)|16,013,931|8006966|
|Using + - big number (10 len)|16,010,876|8005439|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:39:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15912079.14074614,"samples":7956040},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15808049.209587725,"samples":7904025},{"name":"Using + - small number (2 len)","opsSec":16013931.295332778,"samples":8006966},{"name":"Using + - big number (10 len)","opsSec":16010876.142792957,"samples":8005439}]}-->
