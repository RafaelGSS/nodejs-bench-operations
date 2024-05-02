## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|910,178,256|97|
|Using dot notation|910,247,425|97|
|Using define property (writable)|4,712,819|97|
|Using define property initialized (writable)|6,897,524|95|
|Using define property (getter)|2,680,806|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 02 2024 22:21:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":910178255.5176958,"samples":6},{"name":"Using dot notation","opsSec":910247424.9499308,"samples":5},{"name":"Using define property (writable)","opsSec":4712818.767056394,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6897523.709846312,"samples":6},{"name":"Using define property (getter)","opsSec":2680805.7667172905,"samples":4}]}-->
